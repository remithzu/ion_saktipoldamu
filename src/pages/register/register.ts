import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, LoadingController } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Storage } from '@ionic/storage';
import { Http,RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

import { LoginPage } from '../login/login';
import { DemoPage } from '../demo/demo';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  tabBarElement: any;
  signup: FormGroup;
  submitAttempt: boolean = false;
  // posts: any;

  constructor(public navCtrl: NavController,
  	public navParams: NavParams,
    public toasCtrl:ToastController,
    private formBuilder: FormBuilder,
    private http: Http,
    public loadingCtrl: LoadingController,
    public storage: Storage) {
    this.tabBarElement = document.querySelector('.tabbar.show-tabbar');
    this.signup = this.formBuilder.group({
      nama: ['', Validators.required],
      alamat: ['', Validators.required],
      phonenbr: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onPageDidEnter()
  {
    this.tabBarElement.style.display = 'none';
  }

  onPageWillLeave()
  {
    this.tabBarElement.style.display = 'block';
  }

  register() {
    this.submitAttempt = true;
    if(this.signup.valid){
      let loading = this.loadingCtrl.create({
        content: 'Please wait..',
        // duration: 10000,
        spinner: 'crescent'
      })
      loading.present();
      let headers = new Headers({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers: headers });
      var body = JSON.stringify({
        nama: this.signup.value['nama'],
        alamat: this.signup.value['alamat'],
        phonenbr: this.signup.value['phonenbr'],
        password: this.signup.value['password']
      });
      let link = 'http://malut.polri.go.id/sakti-poldamu/rest/register';
      this.http.post(link, body, options).map(res => res.json()).subscribe(data => {
        if (data!=null) {
          loading.dismiss();
          this.storage.set('mydata', data);
          this.navCtrl.push(DemoPage);
        }
        else {
          loading.dismiss();
          this.toasCtrl.create({
            message: 'No. Telp Sudah terdaftar!',
            duration: 4000,
            position: 'top',
            showCloseButton: true,
            closeButtonText: 'x',
            dismissOnPageChange: true
          }).present();
        }
      }, error => {
        console.log(error);
        loading.dismiss();
        this.toasCtrl.create({
          message: 'Pendaftaran gagal',
          duration: 4000,
          position: 'top',
          showCloseButton: true,
          closeButtonText: 'x',
          dismissOnPageChange: true
        }).present();
      });
    }
    else {
      this.toasCtrl.create({
        message: 'Form belum lengkap!',
        duration: 3000,
        position: 'top',
        showCloseButton: true,
        closeButtonText: 'x',
        dismissOnPageChange: true
      }).present();
    }
  }

  login() {
    this.navCtrl.setRoot(LoginPage);
  }

}
