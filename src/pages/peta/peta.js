var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Injectable, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, ToastController, Platform } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
// import { Http } from '@angular/http';
import { GoogleMaps } from '@ionic-native/google-maps';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
/**
 * Generated class for the PetaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
// declare var google: any;
var PetaPage = /** @class */ (function () {
    function PetaPage(googleMaps, navCtrl, geolocation, toastCtrl, platform) {
        this.googleMaps = googleMaps;
        this.navCtrl = navCtrl;
        this.geolocation = geolocation;
        this.toastCtrl = toastCtrl;
        this.platform = platform;
        this.tabBarElement = document.querySelector('.tabbar.show-tabbar');
        // platform.ready().then(() => {
        //   this.initMap();
        // });
    }
    PetaPage.prototype.ionViewWillEnter = function () {
        this.tabBarElement.style.display = 'none';
    };
    PetaPage.prototype.ionViewWillLeave = function () {
        this.tabBarElement.style.display = 'flex';
    };
    PetaPage.prototype.takeMeBack = function () {
        this.navCtrl.parent.select(0);
    };
    PetaPage.prototype.ngAfterViewInit = function () {
        this.initMap();
    };
    PetaPage.prototype.initMap = function () {
        var element = this.mapElement.nativeElement;
        var mapOptions = {
            camera: {
                target: { lat: 0.5349155, lng: 127.8962037 },
                zoom: 8,
                tilt: 30
            }
        };
        this.map = this.googleMaps.create(element, mapOptions);
    };
    PetaPage.prototype.getLocation = function () {
        return this.geolocation.getCurrentPosition();
    };
    PetaPage.prototype.moveCamera = function (loc) {
        return this.map.animateCamera({
            target: loc,
            zoom: 12,
            tilt: 60,
            bearing: 140,
            duration: 4000,
            padding: 0 // default = 20px
        });
    };
    PetaPage.prototype.createMarker = function (loc, title) {
        var options = {
            position: loc,
            title: title,
            icon: 'assets/imgs/pin.png'
        };
        return this.map.addMarker(options);
    };
    PetaPage.prototype.policeStation = function (fab) {
        var _this = this;
        if (fab !== undefined) {
            fab.close();
        }
        this.getLocation()
            .then(function (position) {
            var loc = { lat: position.coords.latitude, lng: position.coords.longitude };
            _this.moveCamera(loc);
            _this.createMarker(loc, 'Me')
                .then(function (marker) {
                marker.showInfoWindow();
            })
                .catch(function (err) {
                var toast = _this.toastCtrl.create({
                    message: err,
                    position: 'top',
                    showCloseButton: true,
                    closeButtonText: 'x',
                    dismissOnPageChange: true
                });
            });
        })
            .catch(function (e) {
            console.log(e.message);
            var toast = _this.toastCtrl.create({
                message: e.message,
                position: 'top',
                showCloseButton: true,
                closeButtonText: 'x',
                dismissOnPageChange: true
            });
        });
    };
    PetaPage.prototype.mapRoadmap = function (fab) {
        if (fab !== undefined) {
            fab.close();
        }
        this.map.clear();
        // this.map.setMapTypeId('MAP_TYPE_ROADMAP');
        this.map.setOptions({
            mapType: 'MAP_TYPE_ROADMAP',
        });
    };
    PetaPage.prototype.mapSatelite = function (fab) {
        if (fab !== undefined) {
            fab.close();
        }
        this.map.clear();
        // this.map.setMapTypeId('MAP_TYPE_SATELLITE');
        this.map.setOptions({
            mapType: 'MAP_TYPE_SATELLITE',
        });
    };
    __decorate([
        ViewChild('map'),
        __metadata("design:type", ElementRef)
    ], PetaPage.prototype, "mapElement", void 0);
    PetaPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-peta',
            templateUrl: 'peta.html',
        }),
        Injectable(),
        __metadata("design:paramtypes", [GoogleMaps,
            NavController,
            Geolocation,
            ToastController,
            Platform])
    ], PetaPage);
    return PetaPage;
}());
export { PetaPage };
//# sourceMappingURL=peta.js.map