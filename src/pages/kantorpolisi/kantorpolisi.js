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
import { IonicPage, NavController, NavParams, ToastController, AlertController } from 'ionic-angular';
import { CallNumber } from '@ionic-native/call-number';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { KantorpolisidtlPage } from '../kantorpolisidtl/kantorpolisidtl';
/**
 * Generated class for the KantorpolisiPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var KantorpolisiPage = /** @class */ (function () {
    function KantorpolisiPage(navCtrl, http, callNumber, navParams, alert, toasCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.http = http;
        this.callNumber = callNumber;
        this.navParams = navParams;
        this.alert = alert;
        this.toasCtrl = toasCtrl;
        this.showList = false;
        this.searchTerm = '';
        this.searching = false;
        this.tabBarElement = document.querySelector('.tabbar.show-tabbar');
        var link = 'http://malut.polri.go.id/sakti-poldamu/rest/kantor';
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
    KantorpolisiPage.prototype.ionViewWillEnter = function () {
        this.tabBarElement.style.display = 'none';
    };
    KantorpolisiPage.prototype.ionViewWillLeave = function () {
        this.tabBarElement.style.display = 'flex';
    };
    KantorpolisiPage.prototype.takeMeBack = function () {
        this.navCtrl.parent.select(0);
    };
    KantorpolisiPage.prototype.loadData = function () {
        var _this = this;
        var link = 'http://malut.polri.go.id/sakti-poldamu/rest/kantor';
        this.http.get(link).map(function (res) { return res.json(); }).subscribe(function (data) {
            _this.posts = data;
        }, function (error) {
            var alerty = _this.alert.create({
                title: "Internal Server!",
                subTitle: "Tidak dapat menghubungkan ke server. Layanan tidak dapat di lanjutkan.",
                buttons: ['Ok']
            });
            alerty.present();
        });
    };
    KantorpolisiPage.prototype.filterItems = function (searchTerm) {
        if (searchTerm != '') {
            if (this.posts) {
                return this.posts.filter(function (item) {
                    var nama = item.nama_kantor.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
                    if (nama) {
                        return nama;
                    }
                });
            }
        }
        else {
            this.loadData();
        }
    };
    KantorpolisiPage.prototype.getItems = function () {
        this.posts = this.filterItems(this.searchTerm);
    };
    KantorpolisiPage.prototype.call = function (n) {
        var _this = this;
        this.callNumber.callNumber(n, true)
            .then(function () {
            _this.toasCtrl.create({
                message: 'Calling ' + n,
                duration: 3000,
                position: 'top',
                showCloseButton: true,
                closeButtonText: 'x',
                dismissOnPageChange: true
            }).present();
        })
            .catch(function (err) {
            _this.toasCtrl.create({
                message: 'Error ' + err,
                duration: 3000,
                position: 'top',
                showCloseButton: true,
                closeButtonText: 'x',
                dismissOnPageChange: true
            }).present();
        });
    };
    KantorpolisiPage.prototype.detail = function (event) {
        this.navCtrl.push(KantorpolisidtlPage, { id: event });
    };
    KantorpolisiPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-kantorpolisi',
            templateUrl: 'kantorpolisi.html',
        }),
        Injectable(),
        __metadata("design:paramtypes", [NavController,
            Http,
            CallNumber,
            NavParams,
            AlertController,
            ToastController])
    ], KantorpolisiPage);
    return KantorpolisiPage;
}());
export { KantorpolisiPage };
//# sourceMappingURL=kantorpolisi.js.map