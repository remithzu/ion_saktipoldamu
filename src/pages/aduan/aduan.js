var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Injectable } from '@angular/core';
import { IonicPage, NavController, ToastController } from 'ionic-angular';
import { Camera } from '@ionic-native/camera';
/**
 * Generated class for the AduanPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AduanPage = /** @class */ (function () {
    function AduanPage(navCtrl, camera, toasCtrl) {
        this.navCtrl = navCtrl;
        this.camera = camera;
        this.toasCtrl = toasCtrl;
        this.tabBarElement = document.querySelector('.tabbar.show-tabbar');
    }
    AduanPage.prototype.ionViewWillEnter = function () {
        this.tabBarElement.style.display = 'none';
    };
    AduanPage.prototype.ionViewWillLeave = function () {
        this.tabBarElement.style.display = 'flex';
    };
    AduanPage.prototype.takeMeBack = function () {
        this.navCtrl.parent.select(0);
    };
    AduanPage.prototype.takeImage = function (event, fab) {
    };
    AduanPage.prototype.takePicture = function (event, fab) {
        var _this = this;
        fab.close();
        var options = {
            quality: 50,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        };
        this.camera.getPicture(options)
            .then(function (imageData) {
            _this.base64Image = "data:image/jpeg;base64," + imageData;
            _this.photos = _this.base64Image;
        })
            .catch(function (err) {
            _this.toasCtrl.create({
                message: 'Error ' + err,
                position: 'top',
                showCloseButton: true,
                closeButtonText: 'x',
                dismissOnPageChange: true
            }).present();
        });
    };
    AduanPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-aduan',
            templateUrl: 'aduan.html',
        }),
        Injectable(),
        __metadata("design:paramtypes", [NavController,
            Camera,
            ToastController])
    ], AduanPage);
    return AduanPage;
}());
export { AduanPage };
//# sourceMappingURL=aduan.js.map