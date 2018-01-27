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
/**
 * Generated class for the BhabinkamtibnasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var BhabinkamtibnasPage = /** @class */ (function () {
    function BhabinkamtibnasPage(navCtrl, http, callNumber, navParams, alert, toasCtrl) {
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
        this.searching = true;
        this.tabBarElement = document.querySelector('.tabbar.show-tabbar');
        var link = 'http://malut.polri.go.id/sakti-poldamu/rest/bhabin';
        this.http.get(link).map(function (res) { return res.json(); }).subscribe(function (data) {
            _this.showList = true;
            _this.posts = data;
            _this.searching = false;
        }, function (error) {
            _this.searching = false;
            var alerty = _this.alert.create({
                title: "Internal Server!",
                subTitle: "Tidak dapat menghubungkan ke server. Layanan tidak dapat di lanjutkan.",
                buttons: ['Ok']
            });
            alerty.present();
        });
    }
    BhabinkamtibnasPage.prototype.ionViewWillEnter = function () {
        this.tabBarElement.style.display = 'none';
    };
    BhabinkamtibnasPage.prototype.ionViewWillLeave = function () {
        this.tabBarElement.style.display = 'flex';
    };
    BhabinkamtibnasPage.prototype.takeMeBack = function () {
        this.navCtrl.parent.select(0);
    };
    BhabinkamtibnasPage.prototype.onSearchInput = function () {
        this.searching = true;
    };
    BhabinkamtibnasPage.prototype.loadData = function () {
        var _this = this;
        this.searching = true;
        var link = 'http://malut.polri.go.id/sakti-poldamu/rest/bhabin';
        this.http.get(link).map(function (res) { return res.json(); }).subscribe(function (data) {
            _this.searching = false;
            _this.showList = true;
            _this.posts = data;
        }, function (error) {
            _this.searching = false;
            var alerty = _this.alert.create({
                title: "Internal Server!",
                subTitle: "Tidak dapat menghubungkan ke server. Layanan tidak dapat di lanjutkan.",
                buttons: ['Ok']
            });
            alerty.present();
        });
    };
    BhabinkamtibnasPage.prototype.call = function (n) {
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
    BhabinkamtibnasPage.prototype.filterItems = function (searchTerm) {
        if (searchTerm != '') {
            if (this.posts) {
                return this.posts.filter(function (item) {
                    var nama = item.nama.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
                    var nrp = item.nrp.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
                    var telp = item.telp.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
                    if (nama) {
                        return nama;
                    }
                    else if (nrp) {
                        return nrp;
                    }
                    else if (telp) {
                        return telp;
                    }
                });
            }
        }
        else {
            this.loadData();
        }
    };
    BhabinkamtibnasPage.prototype.getItems = function (ev) {
        this.searching = true;
        this.posts = this.filterItems(this.searchTerm);
    };
    BhabinkamtibnasPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-bhabinkamtibnas',
            templateUrl: 'bhabinkamtibnas.html'
        }),
        Injectable(),
        __metadata("design:paramtypes", [NavController,
            Http,
            CallNumber,
            NavParams,
            AlertController,
            ToastController])
    ], BhabinkamtibnasPage);
    return BhabinkamtibnasPage;
}());
export { BhabinkamtibnasPage };
//# sourceMappingURL=bhabinkamtibnas.js.map