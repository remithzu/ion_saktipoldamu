import { Component, Injectable } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, LoadingController, Platform, AlertController} from 'ionic-angular';
import { Http } from '@angular/http';
import { Storage } from '@ionic/storage';
import { FileTransfer, FileTransferObject } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';
import 'rxjs/add/operator/map';

import { Sp2hpformPage } from '../sp2hpform/sp2hpform';
import { Sp2hpaddPage } from '../sp2hpadd/sp2hpadd';

/**
 * Generated class for the Sp2hpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare var cordova: any;

@IonicPage()
@Component({
  selector: 'page-sp2hp',
  templateUrl: 'sp2hp.html',
})
@Injectable()
export class Sp2hpPage {
	sps: any;
	phone: any;
  storageDirectory: string = '';
  showList: boolean = false;
  searching: boolean = false;

  constructor(
  	public navCtrl: NavController,
  	private http: Http,
  	public storage: Storage,
    public loadingCtrl: LoadingController,
    public navParams: NavParams,
    public toasCtrl: ToastController,
    private transfer: FileTransfer,
    public file: File,
    public platform: Platform,
    public alert: AlertController) {
    this.showList = false;
    this.searching = true;

    this.platform.ready().then(() => {
      // make sure this is on a device, not an emulation (e.g. chrome tools device mode)
      if(!this.platform.is('cordova')) {
        return false;
      }

      if (this.platform.is('ios')) {
        this.storageDirectory = cordova.file.documentsDirectory;
      }
      else if(this.platform.is('android')) {
        this.storageDirectory = this.file.externalDataDirectory;
      }
      else {
        // exit otherwise, but you could add further types here e.g. Windows
        return false;
      }
    });
  }

  ionViewWillEnter() {
    this.storage.get('mydata')
    .then((data) => {
      if (data) {
        this.phone = data['member_phone'];
        let link = 'http://malut.polri.go.id/sakti-poldamu/rest/sp2hp/'+this.phone;
        this.http.get(link).map(res => res.json()).subscribe(
          data => {
            this.searching = false;
            this.showList = true;
            this.sps = data;
          },
          error => {
            this.searching = false;
            this.showList = false;
            const alerty = this.alert.create({
              title: `Internal Server!`,
              subTitle: `Tidak dapat menghubungkan ke server. Layanan tidak dapat di lanjutkan.`,
              buttons: ['Ok']
            });
            alerty.present();
          }
        );
      }
    });
  }

  tambah(event) {
    this.navCtrl.push(Sp2hpaddPage, {phone: event});
  }

  detail(event) {
  	this.navCtrl.push(Sp2hpformPage, {id: event});
  }

  download(event,name) {
    if (event==null || name==null) {
      this.toasCtrl.create({
        message: 'Dokumen tidak tersedia',
        duration: 4000,
        position: 'top',
        showCloseButton: true,
        closeButtonText: 'x',
        dismissOnPageChange: true
      }).present();
    }
    else {
      let loading = this.loadingCtrl.create({
        content: 'Downloading...',
        spinner: 'crescent'
      })
      loading.present();
      this.platform.ready().then(() => {
        const fileTransfer: FileTransferObject = this.transfer.create();
        const fileLocation = event;
        fileTransfer.download(fileLocation, this.storageDirectory + name, true)
        .then(
          (entry) => {
            loading.dismiss();
            const alertSuccess = this.alert.create({
              title: `Download Succeeded!`,
              subTitle: `${name} was successfully <br><br> downloaded to: ${entry.toURL()}`,
              buttons: ['Ok']
            });
            alertSuccess.present();
          },
          (error) => {
            const alertFailure = this.alert.create({
              title: `Download Failed!`,
              subTitle: `${name}.pdf was not successfully downloaded. Error code: ${error.code}`,
              buttons: ['Ok']
            });
            alertFailure.present();
          }
        )
      });
    }
  }


}
