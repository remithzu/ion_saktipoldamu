import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Http, RequestOptions, Headers } from '@angular/http';

/**
 * Generated class for the PasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-password',
  templateUrl: 'password.html',
})
export class PasswordPage {
	tabBarElement: any;
	phone: any;
  passwd: FormGroup;
  submitAttempt: boolean = false;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public loadingCtrl: LoadingController,
    public toasCtrl:ToastController,
    private http: Http,
    private formBuilder: FormBuilder) {
  	this.tabBarElement = document.querySelector('.tabbar.show-tabbar');
  	this.phone = navParams.get('phone');
    this.passwd = this.formBuilder.group({
      password: ['', Validators.required],
      newpassword: ['', Validators.required],
      repassword: ['', Validators.required]
    });
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

  save() {
    this.submitAttempt = true;
    if(this.passwd.valid){
      let loading = this.loadingCtrl.create({
        content: 'Please wait..',
        spinner: 'crescent'
      })
      loading.present();
      let headers = new Headers({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers: headers });
      var body = JSON.stringify({
        password: this.passwd.value['password'],
        newpassword: this.passwd.value['newpassword'],
        repassword: this.passwd.value['repassword']
      });
      let link = 'http://malut.polri.go.id/sakti-poldamu/rest/chpassword/'+this.phone;
      this.http.post(link, body, options).map(res => res.json()).subscribe(data => {
        loading.dismiss();
        if (data==1) {
          this.toasCtrl.create({
            message: 'Password salah!',
            position: 'top',
            showCloseButton: true,
            closeButtonText: 'x',
            dismissOnPageChange: true
          }).present();
        }
        else if (data==2) {
          this.toasCtrl.create({
            message: 'Password baru tidak cocok!',
            position: 'top',
            showCloseButton: true,
            closeButtonText: 'x',
            dismissOnPageChange: true
          }).present();
        }
        else {
          this.toasCtrl.create({
            message: 'Password berhasil diubah!',
            position: 'top',
            duration: 4000,
            showCloseButton: true,
            closeButtonText: 'x',
            dismissOnPageChange: true
          }).present();
        }
      }, error => {
        console.log(error);
        loading.dismiss();
        this.toasCtrl.create({
          message: 'Gagal mengganti Password!',
          position: 'top',
          showCloseButton: true,
          closeButtonText: 'x',
          dismissOnPageChange: true
        }).present();
      });
    }
  }

}
