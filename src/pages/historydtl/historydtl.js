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
var HistorydtlPage = /** @class */ (function () {
    function HistorydtlPage(navCtrl, http, storage, loadingCtrl, navParams, alert, toasCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.http = http;
        this.storage = storage;
        this.loadingCtrl = loadingCtrl;
        this.navParams = navParams;
        this.alert = alert;
        this.toasCtrl = toasCtrl;
        this.id = navParams.get('id');
        this.storage.get('mydata')
            .then(function (data) {
            if (data) {
                var link = 'http://malut.polri.go.id/sakti-poldamu/rest/history_detail/' + _this.id;
                _this.http.get(link).map(function (res) { return res.json(); }).subscribe(function (data) {
                    _this.judul_laporan = data['judul_laporan'];
                    _this.waktu = data['waktu'];
                    _this.lat = data['lat'];
                    _this.long = data['long'];
                    _this.deskripsi = data['deskripsi'];
                    _this.gambar = data['gambar'];
                    var location = _this.lat + ',' + _this.long;
                    if (_this.lat != '' || _this.long != '') {
                        _this.map = 'https://maps.googleapis.com/maps/api/staticmap?' +
                            'center=' + location +
                            '&zoom=15' +
                            '&scale=1&size=600x300' +
                            '&maptype=roadmap&' +
                            'format=png' +
                            '&visual_refresh=true' +
                            '&markers=size:mid%7Ccolor:0xff0000%7Clabel:%7C' + location;
                    }
                    else {
                        _this.map = '';
                    }
                }, function (error) {
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
    HistorydtlPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-historydtl',
            templateUrl: 'historydtl.html',
        }),
        Injectable(),
        __metadata("design:paramtypes", [NavController,
            Http,
            Storage,
            LoadingController,
            NavParams,
            AlertController,
            ToastController])
    ], HistorydtlPage);
    return HistorydtlPage;
}());
export { HistorydtlPage };
//# sourceMappingURL=historydtl.js.map