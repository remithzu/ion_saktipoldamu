import { Component, Injectable } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, LoadingController, AlertController } from 'ionic-angular';
import { Http } from '@angular/http';
import { Storage } from '@ionic/storage';
import 'rxjs/add/operator/map';

/**
 * Generated class for the HistorydtlPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-historydtl',
  templateUrl: 'historydtl.html',
})
@Injectable()
export class HistorydtlPage {
	id: any;
	judul_laporan: any;
	waktu: any;
	lat: any;
	long: any;
	deskripsi: any;
	gambar: any;
	alamat: any;
	map: string;
	muat: boolean = false;
	terap: boolean = false;

  constructor(
  	public navCtrl: NavController,
  	private http: Http,
  	public storage: Storage,
    public loadingCtrl: LoadingController,
    public navParams: NavParams,
    public alert: AlertController,
    public toasCtrl: ToastController) {
  	this.muat = true;
		this.terap = false;
  	this.id = navParams.get('id');

    this.storage.get('mydata')
    .then((data) => {
      if (data) {
        let link = 'http://malut.polri.go.id/sakti-poldamu/rest/history_detail/'+this.id;
		    this.http.get(link).map(res => res.json()).subscribe(
		      data => {
						this.judul_laporan = data['judul_laporan'];
						this.waktu = data['waktu'];
						this.lat = data['lat'];
						this.long = data['long'];
						this.deskripsi = data['deskripsi'];
						this.alamat = data['alamat'];
						this.gambar = data['gambar'];
						let location = this.lat+','+this.long;
						if (this.lat!='' || this.long!='') {
							this.map = 'https://maps.googleapis.com/maps/api/staticmap?'+
							'center='+location+
							'&zoom=15'+
							'&scale=1&size=600x300'+
							'&maptype=roadmap&'+
							'format=png'+
							'&visual_refresh=true'+
							'&markers=size:mid%7Ccolor:0xff0000%7Clabel:%7C'+location;
						}
						else {this.map = '';}
						this.muat = false;
						this.terap = true;
		      },
		      error => {
		      	this.muat = false;
						this.terap = false;
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

}
