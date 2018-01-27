import { Component } from '@angular/core';
import { NavController, ModalController, AlertController, ToastController, LoadingController } from 'ionic-angular';
import { CallNumber } from '@ionic-native/call-number';
import { Geolocation } from '@ionic-native/geolocation';
import { Storage } from '@ionic/storage';
import { Http, RequestOptions, Headers} from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { PetaPage } from '../peta/peta';
import { KantorpolisiPage } from '../kantorpolisi/kantorpolisi';
import { AduanPage } from '../aduan/aduan';
import { KontakPage } from '../kontak/kontak';
import { LayananPage } from '../layanan/layanan';
import { BhabinkamtibnasPage } from '../bhabinkamtibnas/bhabinkamtibnas';
import { BeritaPage } from '../berita/berita';
import { Sp2hpPage } from '../sp2hp/sp2hp';
import { LoginPage } from '../login/login';

declare var google: any;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  name: any;
  phone: any;
  address: any;

  constructor(
  	public navCtrl: NavController,
  	private callNumber: CallNumber,
    public storage: Storage,
    private http: Http,
    public toasCtrl: ToastController,
    public alert: AlertController,
    public loadingCtrl: LoadingController,
    public geolocation: Geolocation,
    public modalCtrl: ModalController ) {
    this.storage.get('mydata')
    .then((data) => {
      if (data) {
        this.name = data['member_name'];
        this.phone = data['member_phone'];
        this.address = data['member_address'];
      }
      else {
        this.navCtrl.push(LoginPage);
      }
    })
    .catch(error => {
      console.log(error);
      this.navCtrl.push(LoginPage);
    });
  }

  ionViewWillEnter() {
    this.setLocation();
  }

  takeMeBack() {
    this.navCtrl.parent.select(0);
  }

  getLocation() {
    return this.geolocation.getCurrentPosition();
  }

  setLocation() {
    this.getLocation()
    .then(position => {
      console.log(position);
    })
    .catch(error => {
      const alerty = this.alert.create({
        title: `Location!`,
        subTitle: '<html>Lokasi tidak dapat ditemukan, Aplikasi tidak dapat bekerja. '+
        'Hidupkan <b>GPS</b> dan muat ulang aplikasi.</html>',
        buttons: [
          {
            text: 'Ok',
            handler: () => {
              this.setLocation();
            }
          }
        ]
      });
      alerty.present();
    });
  }

  getGeocode(LatLng) {
    let geocoder = new google.maps.Geocoder;
    return Observable.create(observer => {
      geocoder.geocode({'location': LatLng}, function(results, status) {
        if (status === 'OK') {
          if (results[0]) {
            observer.next(results[0].formatted_address);
            observer.complete();
          }
          else if (results[1]) {
            observer.next(results[1].formatted_address);
            observer.complete();
          }
        } else {
          console.log('Error - ', results, ' & Status - ', status);
          observer.next({});
          observer.complete();
        }
      })
    })
  }

  // 1
  peta(event) {
    this.navCtrl.push(PetaPage);
  }

  // 2
  kantorpolisi(event) {
    this.navCtrl.push(KantorpolisiPage);
  }

  // 3
  kontak(event) {
    this.navCtrl.push(KontakPage);
  }

  // 4
  sp2hp(event) {
    this.navCtrl.push(Sp2hpPage);
  }

  // 5
  bantuan(event) {
    this.navCtrl.push(AduanPage);
  }

  // 6
  layanan(event) {
    this.navCtrl.push(LayananPage);
  }

  // 7
  bhabinkamtibnas(event) {
    this.navCtrl.push(BhabinkamtibnasPage);
  }

  // 8
  berita(event) {
    this.navCtrl.push(BeritaPage);
  }

  // 9
  callCenter(n: string){
  	this.callNumber.callNumber(n, true)
	  .then(() => {
	  	this.toasCtrl.create({
	      message: 'Calling '+n,
	      duration: 3000,
	      position: 'top',
	      showCloseButton: true,
	      closeButtonText: 'x',
	      dismissOnPageChange: true
	    }).present();
	  })
	  .catch((err) => {
	  	this.toasCtrl.create({
	      message: 'Canceled',
	      duration: 3000,
	      position: 'top',
	      showCloseButton: true,
	      closeButtonText: 'x',
	      dismissOnPageChange: true
	    }).present();
	  });
	}

  panic(event) {
    let loading = this.loadingCtrl.create({
      content: 'Please wait..',
      spinner: 'crescent'
    })
    loading.present();
    this.getLocation()
    .then(position => {
      let LatLng = {lat: position.coords.latitude, lng: position.coords.longitude};
      let headers = new Headers({ 'Content-Type': 'application/json', 'X-Requested-With': 'XMLHttpRequest' });
      let options = new RequestOptions({ headers: headers });
      let lat = position.coords.latitude;
      let lng = position.coords.longitude;
      let name = this.name;
      let phone = this.phone;
      this.getGeocode(LatLng)
      .subscribe(result => {
        let address = result;
        let message = JSON.stringify({
          lat: lat,
          long: lng,
          name: name,
          phone: phone,
          message: name+' Butuh bantuan darurat No. Hp: '+phone+', Lokasi: '+address
        });

        let link = 'http://malut.polri.go.id/sakti-poldamu/rest/panic_x';
        this.http.post(link, message, options).map(res => res.json()).subscribe(data => {
          loading.dismiss();
          console.log(data);
          const alerty = this.alert.create({
            title: `Panic!`,
            subTitle: '<html>Permintaan darurat anda akan segera diproses. '+
            '<b>Terimakasih</b> sudah menggunakan layanan kami.</html>',
            buttons: ['Ok']
          });
          alerty.present();
        }, error => {
          console.log(error);
          loading.dismiss();
          const alerty = this.alert.create({
            title: `Panic!`,
            subTitle: '<html>Maaf kami tidak dapat meneruskan permintaan darurat anda. '+
            'Server sedang dalam gangguan. '+
            '<b>Terimakasih</b> sudah menggunakan layanan kami.</html>',
            buttons: ['Ok']
          });
          alerty.present();
        });

      }, error => {
        let address = lat+', '+lng;
        let message = JSON.stringify({
          lat: lat,
          long: lng,
          name: name,
          phone: phone,
          message: name+' Butuh bantuan darurat No. Hp: '+phone+', Lokasi: '+address
        });
        
        let link = 'http://malut.polri.go.id/sakti-poldamu/rest/panic_x';
        this.http.post(link, message, options).map(res => res.json()).subscribe(data => {
          loading.dismiss();
          console.log(data);
          const alerty = this.alert.create({
            title: `Panic!`,
            subTitle: '<html>Permintaan darurat anda akan segera diproses. '+
            '<b>Terimakasih</b> sudah menggunakan layanan kami.</html>',
            buttons: ['Ok']
          });
          alerty.present();
        }, error => {
          console.log(error);
          loading.dismiss();
          const alerty = this.alert.create({
            title: `Panic!`,
            subTitle: '<html>Maaf kami tidak dapat meneruskan permintaan darurat anda. '+
            'Server sedang dalam gangguan. '+
            '<b>Terimakasih</b> sudah menggunakan layanan kami.</html>',
            buttons: ['Ok']
          });
          alerty.present();
        });
      })
    })
    .catch(error => {
      const alerty = this.alert.create({
        title: `Location!`,
        subTitle: '<html>Lokasi tidak dapat ditemukan, Panic Button tidak dapat bekerja. '+
        'Hidupkan <b>GPS</b> dan muat ulang aplikasi.</html>',
        buttons: [
          {
            text: 'Ok',
            handler: () => {
              this.panic(event);
            }
          }
        ]
      });
      alerty.present();
    });
  }

}
