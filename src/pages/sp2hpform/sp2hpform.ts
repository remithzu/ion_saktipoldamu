import { Component, Injectable } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, LoadingController, AlertController } from 'ionic-angular';
import { Http } from '@angular/http';

/**
 * Generated class for the Sp2hpformPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sp2hpform',
  templateUrl: 'sp2hpform.html',
  // changeDetection: ChangeDetectionStrategy.OnPush
})
@Injectable()
export class Sp2hpformPage {
	id: any;
	name: any;
	phone: any;
	email: any;
	umur: any;
	gender: any;
	agama: any;
	job: any;
	kewarganegaraan: any;
	address: any;
	waktu: any;
	tkp: any;
	laporan: any;
	spsdtl: any;

  constructor(
    public navCtrl: NavController,
  	public navParams: NavParams,
  	public toasCtrl:ToastController,
    public alert: AlertController,
    private http: Http,
    public loadingCtrl: LoadingController) {
  	this.id = navParams.get('id');

  	let link = 'http://malut.polri.go.id/sakti-poldamu/rest/sp2hp_detail/'+this.id;
    this.http.get(link).map(res => res.json()).subscribe(
      data => {
				this.name = data['name'];
				this.phone = data['phone'];
				this.email = data['email'];
				this.umur = data['umur'];
				this.gender = data['gender'];
				this.agama = data['agama'];
				this.job = data['job'];
				this.kewarganegaraan = data['kewarganegaraan'];
				this.address = data['address'];
				this.waktu = data['waktu'];
				this.tkp = data['tkp'];
				this.laporan = data['laporan'];
      },
      error => {
        const alerty = this.alert.create({
          title: `Internal Server!`,
          subTitle: `Tidak dapat menghubungkan ke server. Layanan tidak dapat di lanjutkan.`,
          buttons: ['Ok']
        });
        alerty.present();
      }
    );
  }

}
