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
import { HistorydtlPage } from '../historydtl/historydtl';
/**
 * Generated class for the HistoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HistoryPage = /** @class */ (function () {
    function HistoryPage(navCtrl, http, storage, loadingCtrl, navParams, alert, toasCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.http = http;
        this.storage = storage;
        this.loadingCtrl = loadingCtrl;
        this.navParams = navParams;
        this.alert = alert;
        this.toasCtrl = toasCtrl;
        var loading = loadingCtrl.create({
            content: 'Please wait..',
            spinner: 'crescent'
        });
        loading.present();
        this.storage.get('mydata')
            .then(function (data) {
            if (data) {
                _this.phone = data['member_phone'];
                var link = 'http://malut.polri.go.id/sakti-poldamu/rest/history/' + _this.phone;
                _this.http.get(link).map(function (res) { return res.json(); }).subscribe(function (data) {
                    _this.histories = data;
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
    HistoryPage.prototype.detail = function (event) {
        this.navCtrl.push(HistorydtlPage, { id: event });
    };
    HistoryPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-history',
            templateUrl: 'history.html',
        }),
        Injectable(),
        __metadata("design:paramtypes", [NavController,
            Http,
            Storage,
            LoadingController,
            NavParams,
            AlertController,
            ToastController])
    ], HistoryPage);
    return HistoryPage;
}());
export { HistoryPage };
//# sourceMappingURL=history.js.map