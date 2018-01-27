import { Component, Injectable } from '@angular/core';
import { IonicPage, NavController, ToastController, FabContainer, LoadingController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Http, RequestOptions, Headers} from '@angular/http';
import { Storage } from '@ionic/storage';
import 'rxjs/add/operator/map';

/**
 * Generated class for the AduanPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-aduan',
  templateUrl: 'aduan.html',
})

@Injectable()
export class AduanPage {
	tabBarElement: any;
  photos : any;
  base64Image : string;
  formAduan: FormGroup;
  submitAttempt: boolean = false;
  lat: any;
  lng: any;
  phone: any;

  constructor(
    public navCtrl: NavController,
    private camera: Camera,
    private formBuilder: FormBuilder,
    private http: Http,
    public storage: Storage,
    public loadingCtrl: LoadingController,
    public toasCtrl: ToastController) {
    this.tabBarElement = document.querySelector('.tabbar.show-tabbar');

    this.storage.get('mydata')
    .then((data) => {
      if (data) {
        this.phone = data['member_phone'];
      }
    });

    this.formAduan = this.formBuilder.group({
      fieldJudul: ['', Validators.required],
      fieldDeskripsi: ['', Validators.required],
      fieldAlamat: ['', Validators.required]
    });

    this.lat = '';
    this.lng = '';
    this.photos = '';
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

  takeImage(event, fab: FabContainer) {
    fab.close();
    const options: CameraOptions = {
      quality: 50,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
    }
    this.camera.getPicture(options)
    .then((imageData) => {
      this.base64Image = "data:image/jpeg;base64," + imageData;
      this.photos = this.base64Image;
    })
    .catch((err) => {
      this.toasCtrl.create({
        message: 'Error '+err,
        position: 'top',
        showCloseButton: true,
        closeButtonText: 'x',
        dismissOnPageChange: true
      }).present();
    });
  }

  takePicture(event, fab: FabContainer) {
    fab.close();
    const options: CameraOptions = {
      quality: 50,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      sourceType: this.camera.PictureSourceType.CAMERA
    }
    this.camera.getPicture(options)
    .then((imageData) => {
      this.base64Image = "data:image/jpeg;base64," + imageData;
      this.photos = this.base64Image;
    })
    .catch((err) => {
      this.toasCtrl.create({
        message: 'Error '+err,
        position: 'top',
        showCloseButton: true,
        closeButtonText: 'x',
        dismissOnPageChange: true
      }).present();
    });
  }

  send() {
    this.submitAttempt = true;
    if(this.formAduan.valid){
      let loading = this.loadingCtrl.create({
        content: 'Please wait..',
        spinner: 'crescent'
      })
      loading.present();
      let headers = new Headers({ 'Content-Type': 'application/json', 'X-Requested-With': 'XMLHttpRequest' });
      let options = new RequestOptions({ headers: headers });
      var body = JSON.stringify({
        judul_laporan: this.formAduan.value['fieldJudul'],
        deskripsi: this.formAduan.value['fieldDeskripsi'],
        alamat: this.formAduan.value['fieldAlamat'],
        lat: this.lat,
        long: this.lng,
        gambar: this.photos,
        member: this.phone
      });
      let link = 'http://malut.polri.go.id/sakti-poldamu/rest/bantuan';
      this.http.post(link, body, options).map(res => res.json()).subscribe(data => {
        loading.dismiss();
        this.toasCtrl.create({
          message: 'Berhasil terkirim!',
          position: 'top',
          showCloseButton: true,
          closeButtonText: 'x',
          dismissOnPageChange: true
        }).present();
      }, error => {
        console.log(error);
        loading.dismiss();
        this.toasCtrl.create({
          message: 'Gagal terkirim!',
          position: 'top',
          showCloseButton: true,
          closeButtonText: 'x',
          dismissOnPageChange: true
        }).present();
      });
    }
  }

}
