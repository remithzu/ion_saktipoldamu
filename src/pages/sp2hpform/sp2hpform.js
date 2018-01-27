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
/**
 * Generated class for the Sp2hpformPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Sp2hpformPage = /** @class */ (function () {
    function Sp2hpformPage(navCtrl, navParams, toasCtrl, alert, http, loadingCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toasCtrl = toasCtrl;
        this.alert = alert;
        this.http = http;
        this.loadingCtrl = loadingCtrl;
        this.id = navParams.get('id');
        var link = 'http://malut.polri.go.id/sakti-poldamu/rest/sp2hp_detail/' + this.id;
        this.http.get(link).map(function (res) { return res.json(); }).subscribe(function (data) {
            _this.name = data['name'];
            _this.phone = data['phone'];
            _this.email = data['email'];
            _this.umur = data['umur'];
            _this.gender = data['gender'];
            _this.agama = data['agama'];
            _this.job = data['job'];
            _this.kewarganegaraan = data['kewarganegaraan'];
            _this.address = data['address'];
            _this.waktu = data['waktu'];
            _this.tkp = data['tkp'];
            _this.laporan = data['laporan'];
        }, function (error) {
            var alerty = _this.alert.create({
                title: "Internal Server!",
                subTitle: "Tidak dapat menghubungkan ke server. Layanan tidak dapat di lanjutkan.",
                buttons: ['Ok']
            });
            alerty.present();
        });
    }
    Sp2hpformPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-sp2hpform',
            templateUrl: 'sp2hpform.html',
        }),
        Injectable(),
        __metadata("design:paramtypes", [NavController,
            NavParams,
            ToastController,
            AlertController,
            Http,
            LoadingController])
    ], Sp2hpformPage);
    return Sp2hpformPage;
}());
export { Sp2hpformPage };
//# sourceMappingURL=sp2hpform.js.map