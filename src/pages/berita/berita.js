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
import 'rxjs/add/operator/map';
/**
 * Generated class for the BeritaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var BeritaPage = /** @class */ (function () {
    function BeritaPage(navCtrl, http, loadingCtrl, navParams, alert, toasCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.http = http;
        this.loadingCtrl = loadingCtrl;
        this.navParams = navParams;
        this.alert = alert;
        this.toasCtrl = toasCtrl;
        this.tabBarElement = document.querySelector('.tabbar.show-tabbar');
        var loading = loadingCtrl.create({
            content: 'Please wait..',
            duration: 10000,
            spinner: 'crescent'
        });
        loading.present();
        var link = 'http://malut.polri.go.id/website/?feed=json';
        this.http.get(link).map(function (res) { return res.json(); }).subscribe(function (data) {
            _this.posts = data;
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
    BeritaPage.prototype.ionViewWillEnter = function () {
        this.tabBarElement.style.display = 'none';
    };
    BeritaPage.prototype.ionViewWillLeave = function () {
        this.tabBarElement.style.display = 'flex';
    };
    BeritaPage.prototype.takeMeBack = function () {
        this.navCtrl.parent.select(0);
    };
    BeritaPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-berita',
            templateUrl: 'berita.html',
        }),
        Injectable(),
        __metadata("design:paramtypes", [NavController,
            Http,
            LoadingController,
            NavParams,
            AlertController,
            ToastController])
    ], BeritaPage);
    return BeritaPage;
}());
export { BeritaPage };
//# sourceMappingURL=berita.js.map