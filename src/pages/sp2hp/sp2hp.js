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
import { IonicPage, NavController, NavParams, ToastController, LoadingController, Platform, AlertController } from 'ionic-angular';
import { Http } from '@angular/http';
import { Storage } from '@ionic/storage';
import { FileTransfer } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';
import 'rxjs/add/operator/map';
import { Sp2hpformPage } from '../sp2hpform/sp2hpform';
import { Sp2hpaddPage } from '../sp2hpadd/sp2hpadd';
var Sp2hpPage = /** @class */ (function () {
    function Sp2hpPage(navCtrl, http, storage, loadingCtrl, navParams, toasCtrl, transfer, file, platform, alert) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.http = http;
        this.storage = storage;
        this.loadingCtrl = loadingCtrl;
        this.navParams = navParams;
        this.toasCtrl = toasCtrl;
        this.transfer = transfer;
        this.file = file;
        this.platform = platform;
        this.alert = alert;
        this.storageDirectory = '';
        this.platform.ready().then(function () {
            // make sure this is on a device, not an emulation (e.g. chrome tools device mode)
            if (!_this.platform.is('cordova')) {
                return false;
            }
            if (_this.platform.is('ios')) {
                _this.storageDirectory = cordova.file.documentsDirectory;
            }
            else if (_this.platform.is('android')) {
                _this.storageDirectory = _this.file.externalDataDirectory;
            }
            else {
                // exit otherwise, but you could add further types here e.g. Windows
                return false;
            }
        });
        var loading = loadingCtrl.create({
            content: 'Please wait..',
            spinner: 'crescent'
        });
        loading.present();
        this.storage.get('mydata')
            .then(function (data) {
            if (data) {
                _this.phone = data['member_phone']; //malut.polri.go.id
                var link = 'http://malut.polri.go.id/sakti-poldamu/rest/sp2hp/' + _this.phone;
                _this.http.get(link).map(function (res) { return res.json(); }).subscribe(function (data) {
                    _this.sps = data;
                    loading.dismiss();
                }, function (error) {
                    loading.dismiss();
                    var alerty = _this.alert.create({
                        title: "Internal Server!",
                        subTitle: "Tidak dapat menghubungkan ke server. Layanan tidak dapat di lanjutkan.",
                        buttons: ['Ok']
                    });
                    alerty.present();
                });
            }
        });
    }
    Sp2hpPage.prototype.tambah = function (event) {
        this.navCtrl.push(Sp2hpaddPage, { phone: event });
    };
    Sp2hpPage.prototype.detail = function (event) {
        this.navCtrl.push(Sp2hpformPage, { id: event });
    };
    Sp2hpPage.prototype.download = function (event, name) {
        var _this = this;
        if (event == null || name == null) {
            this.toasCtrl.create({
                message: 'Dokumen tidak tersedia',
                duration: 4000,
                position: 'top',
                showCloseButton: true,
                closeButtonText: 'x',
                dismissOnPageChange: true
            }).present();
        }
        else {
            var loading_1 = this.loadingCtrl.create({
                content: 'Downloading...',
                spinner: 'crescent'
            });
            loading_1.present();
            this.platform.ready().then(function () {
                var fileTransfer = _this.transfer.create();
                var fileLocation = event;
                fileTransfer.download(fileLocation, _this.storageDirectory + name, true)
                    .then(function (entry) {
                    loading_1.dismiss();
                    var alertSuccess = _this.alert.create({
                        title: "Download Succeeded!",
                        subTitle: name + " was successfully <br><br> downloaded to: " + entry.toURL(),
                        buttons: ['Ok']
                    });
                    alertSuccess.present();
                }, function (error) {
                    var alertFailure = _this.alert.create({
                        title: "Download Failed!",
                        subTitle: name + ".pdf was not successfully downloaded. Error code: " + error.code,
                        buttons: ['Ok']
                    });
                    alertFailure.present();
                });
            });
        }
    };
    Sp2hpPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-sp2hp',
            templateUrl: 'sp2hp.html',
        }),
        Injectable(),
        __metadata("design:paramtypes", [NavController,
            Http,
            Storage,
            LoadingController,
            NavParams,
            ToastController,
            FileTransfer,
            File,
            Platform,
            AlertController])
    ], Sp2hpPage);
    return Sp2hpPage;
}());
export { Sp2hpPage };
//# sourceMappingURL=sp2hp.js.map