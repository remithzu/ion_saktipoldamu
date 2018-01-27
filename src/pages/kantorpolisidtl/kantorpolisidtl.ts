import { Component, Injectable, ViewChild, ElementRef, NgZone } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, AlertController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { CallNumber } from '@ionic-native/call-number';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

/**
 * Generated class for the KantorpolisidtlPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare var google: any;

@IonicPage()
@Component({
  selector: 'page-kantorpolisidtl',
  templateUrl: 'kantorpolisidtl.html',
})
@Injectable()
export class KantorpolisidtlPage {
  @ViewChild('map') mapElement: ElementRef;
  map: any;
  places: any;
  service: any;
  placeID: any;
  name: any;
  loading: boolean = false;
  showList: boolean = false;

  constructor(
    public navCtrl: NavController,
    private zone: NgZone,
    private callNumber: CallNumber,
    public navParams: NavParams,
    public alert: AlertController,
    public geolocation: Geolocation,
    public toasCtrl: ToastController) {
    this.placeID = navParams.get('placeId');
    this.loading = true;
    this.showList = false;

  }

  ionViewDidLoad(): void {
    this.initRoad();
    this.service = new google.maps.places.PlacesService(this.map);
  }

  ionViewWillEnter() {
    this.getPlaceDetails(this.placeID);
  }

  takeMeBack() {
    this.navCtrl.parent.select(0);
  }

  initRoad() {
    let LatLng = new google.maps.LatLng(0.5349155, 127.8962037);
    let mapOption = {
      center: LatLng,
      zoom: 8,
      zoomControl: false,
      disableDefaultUI: true,
      streetViewControl: false,
      fullscreenControl: false,
      mapTypeId: 'roadmap'
    }
    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOption);
  }

  getLocation() {
    return this.geolocation.getCurrentPosition();
  }

  getPlaceDetails(place_id){
    this.places = [];
    let location = {
        lat: null,
        lng: null,
        name: null,
        phone: null,
        address: null,
        icon: null,
        photos: null,
        url: null,
        map: null,
        link: null
    };

    this.service.getDetails({placeId: place_id}, (details) => {
      this.zone.run(() => {
        let latLng = details.geometry.location.lat()+','+details.geometry.location.lng();
        location.lat = details.geometry.location.lat();
        location.lng = details.geometry.location.lng();
        location.name = details.name;
        location.phone = details.formatted_phone_number;
        location.address = details.formatted_address;
        location.icon = details.icon;
        location.photos = details.photos;
        location.url = details.website;
        location.link = 'https://www.google.com/maps/dir//'+latLng+'/';
        location.map = 'https://maps.googleapis.com/maps/api/staticmap?'+
              'center='+latLng+
              '&zoom=15'+
              '&scale=1&size=600x300'+
              '&maptype=roadmap&'+
              'format=png'+
              '&visual_refresh=true'+
              '&markers=size:mid%7Ccolor:0xff0000%7Clabel:%7C'+latLng;
        this.places = [location];
        this.name = details.name;
        this.loading = false;
        this.showList = true;
      });
    });
  }

  call(n: string){
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
}
