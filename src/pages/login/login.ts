import { Component, Injectable } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, Platform, ToastController, LoadingController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Http, RequestOptions, Headers } from '@angular/http';

import { RegisterPage } from '../register/register';
import { TabsPage } from '../tabs/tabs';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
@Injectable()
export class LoginPage {
  tabBarElement: any;
  unregisterBackButtonAction: any;
  signin: FormGroup;
  submitAttempt: boolean = false;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController,
    public platform: Platform,
    public storage: Storage,
    private http: Http,
    public loadingCtrl: LoadingController,
    public toasCtrl:ToastController,
    private formBuilder: FormBuilder) {
    this.tabBarElement = document.querySelector('.tabbar.show-tabbar');
    platform.registerBackButtonAction(() => {
      viewCtrl.dismiss();
    });
    this.signin = this.formBuilder.group({
      phonenbr: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ionViewDidLoad() {
    this.initializeBackButtonCustomHandler();
  }

  initializeBackButtonCustomHandler(): void {
    this.unregisterBackButtonAction = this.platform.registerBackButtonAction(function(event){
    }, 101); // Priority 101 will override back button handling (we set in app.component.ts) as it is bigger then priority 100 configured in app.component.ts file */
  }

  ionViewWillEnter() {
    this.viewCtrl.showBackButton(false);
    this.viewCtrl.enableBack();
    this.unregisterBackButtonAction && this.unregisterBackButtonAction();
  }
  
  onPageDidEnter()
  {
    this.tabBarElement.style.display = 'none';
  }

  onPageWillLeave()
  {
    this.tabBarElement.style.display = 'block';
  }

  login() {
    this.submitAttempt = true;
    if(this.signin.valid){
      let loading = this.loadingCtrl.create({
        content: 'Please wait..',
        // duration: 10000,
        spinner: 'crescent'
      })
      loading.present();
      let headers = new Headers({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers: headers });
      var body = JSON.stringify({
        phonenbr: this.signin.value['phonenbr'],
        password: this.signin.value['password']
      });
      let link = 'http://malut.polri.go.id/sakti-poldamu/rest/signin';
      this.http.post(link, body, options).map(res => res.json()).subscribe(data => {
        loading.dismiss();
        this.storage.set('mydata', data);
        this.navCtrl.setRoot(TabsPage);
      }, error => {
        loading.dismiss();
        this.toasCtrl.create({
          message: 'Login gagal',
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
        message: 'Phone atau Password kosong!',
        duration: 3000,
        position: 'top',
        showCloseButton: true,
        closeButtonText: 'x',
        dismissOnPageChange: true
      }).present();
    }
  }

  register() {
    this.navCtrl.push(RegisterPage);
  }
}
