import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { ProfilePage } from '../profile/profile';
import { AboutPage } from '../about/about';
import { LoginPage } from '../login/login';
import { PasswordPage } from '../password/password';

/**
 * Generated class for the MyaccountPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-myaccount',
  templateUrl: 'myaccount.html',
})
export class MyaccountPage {
  posts: any;
  name: any;
  address: any;
  register_date: any;
  phone: string;

  constructor(
    public navCtrl: NavController,
    public storage: Storage,
    private http: Http,
    public alert:AlertController,
    public navParams: NavParams,
    public loadingCtrl: LoadingController) {
    this.storage.get('mydata')
    .then((data) => {
      if (data) {
        this.phone = data['member_phone'];
      }
    });
    let link = 'http://malut.polri.go.id/sakti-poldamu/rest/getloadmember/'+this.phone;
    this.http.get(link).map(res => res.json()).subscribe(
      data => {
        this.name = data['name'];
        this.address = data['address'];
        this.register_date = data['register_date'];
        this.phone = data['phone'];
      },
      error => {
        this.ionViewWillEnter();
      }
    );
  }

  ionViewWillEnter() {
    let link = 'http://malut.polri.go.id/sakti-poldamu/rest/getloadmember/'+this.phone;
    this.http.get(link).map(res => res.json()).subscribe(
      data => {
        this.name = data['name'];
        this.address = data['address'];
        this.register_date = data['register_date'];
        this.phone = data['phone'];
      },
      error => {
        this.ionViewWillEnter();
      }
    );
  }

  logout(event) {
    this.storage.set('mydata', null);
    let loader = this.loadingCtrl.create({
      content: "Please wait...",
      duration: 4000
    });
    loader.present();
    this.navCtrl.push(LoginPage);
  }

  gantipassword(event) {
    this.navCtrl.push(PasswordPage, {phone:event});
  }

  edit(event) {
  	this.navCtrl.push(ProfilePage, {
      name:this.name,
      address:this.address,
      register_date:this.register_date,
      phone:this.phone
    });
  }

  about(event) {
  	this.navCtrl.push(AboutPage);
  }

}
