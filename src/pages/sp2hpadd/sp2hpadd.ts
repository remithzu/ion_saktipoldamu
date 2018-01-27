import { Component, Injectable } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, LoadingController,  } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Http, RequestOptions, Headers } from '@angular/http';

/**
 * Generated class for the Sp2hpaddPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sp2hpadd',
  templateUrl: 'sp2hpadd.html',
})
@Injectable()
export class Sp2hpaddPage {
	sp2hpform: FormGroup;
  submitAttempt: boolean = false;
  phoneid: any;

  constructor(
  	public navCtrl: NavController,
  	public navParams: NavParams,
  	public toasCtrl:ToastController,
    public storage: Storage,
    private http: Http,
    private formBuilder: FormBuilder,
    public loadingCtrl: LoadingController) {
  	this.phoneid = navParams.get('phone');

  	this.sp2hpform = this.formBuilder.group({
	  	field_name: ['', Validators.required],
			field_phone: ['', Validators.required],
			field_email: ['', Validators.required],
			field_umur: ['', Validators.required],
			field_gender: ['', Validators.required],
			field_agama: ['', Validators.required],
			field_job: ['', Validators.required],
			field_kewarganegaraan: ['', Validators.required],
			field_address: ['', Validators.required],
			field_waktu: ['', Validators.required],
			field_tkp: ['', Validators.required],
			field_laporan: ['', Validators.required]
		});
  }

  save() {
    this.submitAttempt = true;
    if(this.sp2hpform.valid){
      let loading = this.loadingCtrl.create({
        content: 'Please wait..',
        spinner: 'crescent'
      })
      loading.present();
      let headers = new Headers({ 'Content-Type': 'application/json', 'X-Requested-With': 'XMLHttpRequest' });
      let options = new RequestOptions({ headers: headers });
      var body = JSON.stringify({
        name: this.sp2hpform.value['field_name'],
				phone: this.sp2hpform.value['field_phone'],
				email: this.sp2hpform.value['field_email'],
				umur: this.sp2hpform.value['field_umur'],
				gender: this.sp2hpform.value['field_gender'],
				agama: this.sp2hpform.value['field_agama'],
				job: this.sp2hpform.value['field_job'],
				kewarganegaraan: this.sp2hpform.value['field_kewarganegaraan'],
				address: this.sp2hpform.value['field_address'],
				waktu: this.sp2hpform.value['field_waktu'],
				tkp: this.sp2hpform.value['field_tkp'],
				laporan: this.sp2hpform.value['field_laporan']
      });
      let link = 'http://malut.polri.go.id/sakti-poldamu/rest/sp2hpinsert/'+this.phoneid;
      this.http.post(link, body, options).map(res => res.json()).subscribe(data => {
        loading.dismiss();
        this.toasCtrl.create({
          message: 'Data berhasil disimpan!',
          position: 'top',
          showCloseButton: true,
          closeButtonText: 'x',
          dismissOnPageChange: true
        }).present();
      }, error => {
        console.log(error);
        loading.dismiss();
        this.toasCtrl.create({
          message: 'Gagal menyimpan data!',
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

}
