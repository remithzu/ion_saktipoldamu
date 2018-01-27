import { Component, Injectable, ViewChild, ElementRef  } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, AlertController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { KantorpolisidtlPage } from '../kantorpolisidtl/kantorpolisidtl';

declare var google: any;

@IonicPage()
@Component({
  selector: 'page-kantorpolisi',
  templateUrl: 'kantorpolisi.html',
})

@Injectable()
export class KantorpolisiPage {
  @ViewChild('map') mapElement: ElementRef;
  map: any;
	posts: any;
  searchTerm: string = '';
  showList: boolean = false;
  searching: boolean = false;
  zeroresult: boolean = false;
  LatLng: any;
  newPosts: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alert: AlertController,
    public geolocation: Geolocation,
    public toasCtrl: ToastController) {
    this.showList = false;
    this.searching = true;
    this.zeroresult = false;
  }

  ionViewWillEnter() {
    this.initRoad();
    this.getPoliceStation();
  }

  takeMeBack() {
    this.navCtrl.parent.select(0);
  }

  onSearchInput(){
    this.searching = true;
    this.zeroresult = false;
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
    this.map.setTilt(45);
  }

  getLocation() {
    return this.geolocation.getCurrentPosition();
  }

  getNearBy(latLng)
  {
    var service = new google.maps.places.PlacesService(this.map);
    let request = {
        location : latLng,
        radius : 5000 ,
        name: ['polres','polsek'],
        types: ["police"]
    };
    return new Promise((resolve,reject)=>{
      service.nearbySearch(request,function(results,status){
        if(status === google.maps.places.PlacesServiceStatus.OK) {
          resolve(results);
        }
        else {
          reject(status);
        }
      });
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

  getPoliceStation(){
    this.getLocation()
    .then(position => {
      let startLatLng = {lat: position.coords.latitude, lng: position.coords.longitude};

      /* NEARBY */
      this.getNearBy(startLatLng)
      .then( (results:any) => {
        this.posts = results;
        this.searching = false;
        this.zeroresult = false;
        this.showList = true;
      })
      .catch(error => {
        this.searching = false;
        this.showList = false;
        this.zeroresult = true;
        console.log(error);
      });
    })
    .catch(error => {
      this.searching = false;
      this.showList = false;
      this.zeroresult = true;
      console.log(error);
    });
  }

  filterItems(searchTerm){
    if (searchTerm != '') {
      if (this.posts) {
        return this.posts.filter((item) => {
          let nama = item.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
          let alamat = item.vicinity.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;

          this.searching = false;
          if (nama) {
            return nama;
          }
          else if (alamat) {
            return alamat;
          }
        })
      }
    }
    else {
      this.getPoliceStation();
    }
  }

  getItems() {
    this.searching = true;
    this.posts = this.filterItems(this.searchTerm)
  }

  detail(event){
    this.navCtrl.push(KantorpolisidtlPage, {placeId: event});
  }
}
