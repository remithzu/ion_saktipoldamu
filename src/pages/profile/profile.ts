import { Component, ChangeDetectionStrategy, Injectable } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, LoadingController,  } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Http, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
@Injectable()
export class ProfilePage {
  tabBarElement: any;
  phone: any;
  name: any;
  address: any;
  phonenbr: any;
  profiles: FormGroup;
  submitAttempt: boolean = false;

  constructor(
    public navCtrl: NavController,
  	public navParams: NavParams,
  	public toasCtrl:ToastController,
    public storage: Storage,
    private http: Http,
    private formBuilder: FormBuilder,
    public loadingCtrl: LoadingController) {
    this.tabBarElement = document.querySelector('.tabbar.show-tabbar');

    this.name = navParams.get('name');;
    this.address = navParams.get('address');;
    this.phone = navParams.get('phone');;
      
    this.profiles = this.formBuilder.group({
      field_name: ['', Validators.required],
      field_address: ['', Validators.required],
      field_phone: ['', Validators.required]
    });
  }

  save() {
    this.submitAttempt = true;
    if(this.profiles.valid){
      let loading = this.loadingCtrl.create({
        content: 'Please wait..',
        spinner: 'crescent'
      })
      loading.present();
      let headers = new Headers({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers: headers });
      var body = JSON.stringify({
        name: this.profiles.value['field_name'],
        address: this.profiles.value['field_address'],
        phone: this.profiles.value['field_phone']
      });
      let link = 'http://malut.polri.go.id/sakti-poldamu/rest/updatemember/'+this.phone;
      this.http.post(link, body, options).map(res => res.json()).subscribe(data => {
        loading.dismiss();
        this.toasCtrl.create({
          message: 'Update berhasil!',
          position: 'top',
          showCloseButton: true,
          closeButtonText: 'x',
          dismissOnPageChange: true
        }).present();
      }, error => {
        console.log(error);
        loading.dismiss();
        this.toasCtrl.create({
          message: 'Update gagal!',
          position: 'top',
          showCloseButton: true,
          closeButtonText: 'x',
          dismissOnPageChange: true
        }).present();
      });
    }
  }
 
  takeMeBack() {
    this.navCtrl.parent.select(0);
  }
}
