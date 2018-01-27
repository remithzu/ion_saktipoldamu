import { Component, Injectable } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, AlertController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/**
 * Generated class for the BeritaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-berita',
  templateUrl: 'berita.html',
})

@Injectable()
export class BeritaPage {
  tabBarElement: any;
  posts: any;
  showList: boolean = false;
  searching: boolean = false;

  constructor(
  	public navCtrl: NavController,
    private http: Http,
    public navParams: NavParams,
    public alert: AlertController,
    public toasCtrl: ToastController) {
    this.showList = false;
    this.searching = true;
    this.tabBarElement = document.querySelector('.tabbar.show-tabbar');

    let link = 'http://malut.polri.go.id/website/?feed=json';
    this.http.get(link).map(res => res.json()).subscribe(
      data => {
        this.showList = true;
        this.searching = false;
        this.posts = data;
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
}
