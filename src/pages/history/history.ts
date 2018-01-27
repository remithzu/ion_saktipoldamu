import { Component, Injectable } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, AlertController } from 'ionic-angular';
import { Http } from '@angular/http';
import { Storage } from '@ionic/storage';
import 'rxjs/add/operator/map';

import { HistorydtlPage } from '../historydtl/historydtl';

/**
 * Generated class for the HistoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-history',
  templateUrl: 'history.html',
})
@Injectable()
export class HistoryPage {
	histories: any;
	phone: any;
	dtl: any;
  showList: boolean = false;
  searching: boolean = false;

  constructor(
  	public navCtrl: NavController,
  	private http: Http,
  	public storage: Storage,
    public navParams: NavParams,
    public alert: AlertController,
    public toasCtrl: ToastController) {
  }

  // ionViewDidEnter() {
  ionViewWillEnter() {
    this.showList = false;
    this.searching = true;
    this.storage.get('mydata')
    .then((data) => {
      if (data) {
        this.phone = data['member_phone'];
        let link = 'http://malut.polri.go.id/sakti-poldamu/rest/history/'+this.phone;
        this.http.get(link).map(res => res.json()).subscribe(
          data => {
            this.showList = true;
            this.searching = false;
            this.histories = data;
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
    });
  }

  detail(event) {
    this.showList = false;
  	this.navCtrl.push(HistorydtlPage, {id: event});
  }

}
