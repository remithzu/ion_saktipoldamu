import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, AlertController } from 'ionic-angular';
import { CallNumber } from '@ionic-native/call-number';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/**
 * Generated class for the KontakPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-kontak',
  templateUrl: 'kontak.html',
})
export class KontakPage {
	tabBarElement: any;
  kontaks: any;
  searchTerm: string = '';
  showList: boolean = false;
  searching: boolean = false;

  constructor(
    public navCtrl: NavController,
    private http: Http,
    private callNumber: CallNumber,
    public navParams: NavParams,
    public alert: AlertController,
    public toasCtrl: ToastController) {
    this.searching = true;
    this.showList = false;
    this.tabBarElement = document.querySelector('.tabbar.show-tabbar');

    let link = 'http://malut.polri.go.id/sakti-poldamu/rest/kontak';
    this.http.get(link).map(res => res.json()).subscribe(
      data => {
        this.showList = true;
        this.searching = false;
        this.kontaks = data;
      },
      error => {
        this.showList = false;
        this.searching = false;
        const alerty = this.alert.create({
          title: `Internal Server!`,
          subTitle: `Tidak dapat menghubungkan ke server. Layanan tidak dapat di lanjutkan.`,
          buttons: ['Ok']
        });
        alerty.present();
      }
    );
  }

  ionViewWillEnter() {
    this.tabBarElement.style.display = 'none';
  }

  ionViewWillLeave() {
    this.tabBarElement.style.display = 'flex';
  }

  takeMeBack() {
    this.navCtrl.parent.select(0);
  }

  loadData() {
    let link = 'http://malut.polri.go.id/sakti-poldamu/rest/kontak';
    this.http.get(link).map(res => res.json()).subscribe(
      data => {
        this.showList = true;
        this.searching = false;
        this.kontaks = data;
      },
      error => {
        this.showList = false;
        this.searching = false;
        const alerty = this.alert.create({
          title: `Internal Server!`,
          subTitle: `Tidak dapat menghubungkan ke server. Layanan tidak dapat di lanjutkan.`,
          buttons: ['Ok']
        });
        alerty.present();
      }
    );
  }

  filterItems(searchTerm){
    if (searchTerm != '') {
      if (this.kontaks) {
        this.searching = false;
        return this.kontaks.filter((item) => {
          let name = item.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
          let phone = item.phone.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;

          if (name) {
            this.searching = false;
            return name;
          }
          else if (phone) {
            this.searching = false;
            return phone;
          }
        });
      }
    }
    else {
      this.loadData();
    }
  }

  getItems() {
    this.searching = true;
    this.kontaks = this.filterItems(this.searchTerm);
  }

  call(n: string){
    this.callNumber.callNumber(n, true)
    .then(() => {
      this.toasCtrl.create({
        message: 'Calling '+n,
        duration: 3000,
        position: 'top',
        showCloseButton: true,
        closeButtonText: 'x',
        dismissOnPageChange: true
      }).present();
    })
    .catch((err) => {
      this.toasCtrl.create({
        message: 'Error '+err,
        duration: 3000,
        position: 'top',
        showCloseButton: true,
        closeButtonText: 'x',
        dismissOnPageChange: true
      }).present();
    });
  }

}
