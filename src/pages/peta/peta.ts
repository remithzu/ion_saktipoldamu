import { Component, Injectable, ViewChild, ElementRef, NgZone } from '@angular/core';
import { IonicPage, NavController, ToastController, Platform, FabContainer, ActionSheetController, AlertController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

declare var google: any;

@IonicPage()
@Component({
  selector: 'page-peta',
  templateUrl: 'peta.html',
})
@Injectable()
export class PetaPage {
  @ViewChild('map') mapElement: ElementRef;
  policeOffice: any;
  fromMe: any;
  map: any;
  places: any;
  service: any;
  placeID: any;
  geoaddress: any;
  address: any;
  markers: any = [];
  arr_marker: any = [];
  link: any;
  fabEnable: boolean= false;

  constructor(
    public navCtrl: NavController,
    public geolocation: Geolocation,
    public toastCtrl: ToastController,
    public alertCtrl: AlertController,
    public actionSheetCtrl: ActionSheetController,
    private zone: NgZone,
    public platform: Platform) {
    this.fabEnable = false;
  }

  ionViewWillEnter(): void {
    this.initRoad();
    this.service = new google.maps.places.PlacesService(this.map);
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

  initSatelite() {
    let LatLng = new google.maps.LatLng(0.5349155, 127.8962037);
    let mapOption = {
      center: LatLng,
      zoom: 8,
      zoomControl: false,
      disableDefaultUI: true,
      streetViewControl: false,
      fullscreenControl: false,
      mapTypeId: 'satellite'
    }
    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOption);
  }

  getLocation() {
    return this.geolocation.getCurrentPosition();
  }

  getNearBy(latLng)
  {
    let request = {
        location : latLng,
        radius : 5000 ,
        types: ["police"]
    };
    return new Promise((resolve,reject)=>{
      this.service.nearbySearch(request,function(results,status){
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

  getDirectionRoute(startLatLng, endLatLong) {
    var directionsService = new google.maps.DirectionsService;
    var directionsDisplay = new google.maps.DirectionsRenderer({map: this.map});
    directionsService.route({
      origin: startLatLng,
      destination: endLatLong,
      travelMode: 'DRIVING'
    }, function(response, status) {
      if (status === 'OK') {
        directionsDisplay.setDirections(response);
      } else {
        window.alert('Directions request failed due to ' + status);
      }
    });
  }

  createMarker(LatLng, icons) {
    let marker = new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.DROP,
      position: LatLng,
      icon: icons
    });
    this.arr_marker.push(marker);
    let id = this.arr_marker.length-1;
    this.arr_marker[id].setMap(this.map);
  }

  getPlaceDetails(startLatLng,place_id){
    let sheet = this.actionSheetCtrl;
    let act = [];
    this.service.getDetails({placeId: place_id}, (details) => {
      this.zone.run(() => {
        if(details){
          let lat = details.geometry.location.lat();
          let lng = details.geometry.location.lng();
          let latLng = lat+','+lng;
          let endLatLong = { lat:lat, lng:lng };
          let name = details.name;
          let phone = details.formatted_phone_number;
          let address = details.formatted_address;
          let icon = 'assets/imgs/marker-police.png';
          let link = 'https://www.google.com/maps/dir//'+latLng+'/';

          let marker = new google.maps.Marker({
            map: this.map,
            position: endLatLong,
            icon: icon
          });

          if(phone) {
            act[0] = {text: phone};
            act[1] = {text: address};
            act[2] = {
              text: 'Menuju Lokasi',
              role: 'destructive',
              handler: () => {
                var directionsService = new google.maps.DirectionsService;
                var directionsDisplay = new google.maps.DirectionsRenderer({
                  map: this.map,
                  suppressMarkers: true,
                  polylineOptions: {
                    strokeColor: '#2980b9'
                  }
                });
                this.fabEnable = true;
                this.link = link;
                directionsDisplay.setMap(this.map);
                directionsService.route({
                  origin: startLatLng,
                  destination: endLatLong,
                  travelMode: 'DRIVING'
                }, function(response, status) {
                  if (status === 'OK') {
                    directionsDisplay.setDirections(response);
                  } else {
                    console.log(status);
                  }
                });
              }
            };
          }
          else {
            act[0] = {text: address};
            act[1] = {
              text: 'Menuju Lokasi',
              role: 'destructive',
              handler: () => {
                var directionsService = new google.maps.DirectionsService;
                var directionsDisplay = new google.maps.DirectionsRenderer({
                  map: this.map,
                  suppressMarkers: true,
                  polylineOptions: {
                    strokeColor: '#2980b9'
                  }
                });
                this.fabEnable = true;
                this.link = link;
                directionsDisplay.setMap(this.map);
                directionsService.route({
                  origin: startLatLng,
                  destination: endLatLong,
                  travelMode: 'DRIVING'
                }, function(response, status) {
                  if (status === 'OK') {
                    directionsDisplay.setDirections(response);
                  } else {
                    console.log(status);
                  }
                });
              }
            };
          }
          google.maps.event.addListener(marker, 'click', function() {
            this.fabEnable = false;
            let actionSheet = sheet.create({
            title: name,
              buttons: act
            });
            actionSheet.present();
          });
        }
      })
    })
  }


  /**
   * Menu MAP
   */
  setPosition(fab?: FabContainer) {
    if (fab !== undefined) {
      fab.close();
    }
    this.getLocation()
    .then(position => {
      let icons = 'assets/imgs/pin.png';
      let startLatLng = {lat: position.coords.latitude, lng: position.coords.longitude};

      /* NEARBY */
      this.getNearBy(startLatLng)
      .then( (results:any) => {
        for (var i = 0; i < results.length; i++) {
          let place = results[i];
          this.getPlaceDetails(startLatLng, place.place_id);
        }
      })
      .catch(error => {
        console.log(error);
      });

      /* GEOCODE */
      this.getGeocode(startLatLng)
      .subscribe(result => {
        if(result) {
          this.geoaddress = result;
        }
        else {
          this.geoaddress = position.coords.latitude+', '+position.coords.longitude;
        }

        var marker = new google.maps.Marker({
          position: startLatLng,
          map: this.map,
          icon: icons
        });
        marker.setMap(this.map);

        let info = '<div>';
            info += '<table>';
            info += '<tr><td style="text-align: center"><b>'+this.geoaddress+'</b></td></tr>';
            info += '</table>';
            info += '</div>';
        var infowindow = new google.maps.InfoWindow({
          content: info
        });
        infowindow.open(this.map, marker);

        let bounds = new google.maps.LatLngBounds();
        bounds.extend(startLatLng);
        this.map.fitBounds(bounds);
        this.map.setZoom(14);
      }, error => {
        console.log(error);
      });
    })
    .catch(error => {
      console.log(error);
    });
  }

  mapRoadmap(fab?: FabContainer) {
    if (fab !== undefined) {
      fab.close();
    }
    this.initRoad();
  }

  mapSatelite(fab?: FabContainer) {
    if (fab !== undefined) {
      fab.close();
    }
    this.initSatelite();
  }
}
