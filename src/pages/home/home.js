var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { NavController, ToastController, ModalController } from 'ionic-angular';
import { CallNumber } from '@ionic-native/call-number';
import { PetaPage } from '../peta/peta';
import { KantorpolisiPage } from '../kantorpolisi/kantorpolisi';
import { AduanPage } from '../aduan/aduan';
import { KontakPage } from '../kontak/kontak';
import { LayananPage } from '../layanan/layanan';
import { BhabinkamtibnasPage } from '../bhabinkamtibnas/bhabinkamtibnas';
import { BeritaPage } from '../berita/berita';
import { Sp2hpPage } from '../sp2hp/sp2hp';
import { PanicPage } from '../panic/panic';
var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, callNumber, toasCtrl, modalCtrl) {
        this.navCtrl = navCtrl;
        this.callNumber = callNumber;
        this.toasCtrl = toasCtrl;
        this.modalCtrl = modalCtrl;
    }
    // 1
    HomePage.prototype.peta = function (event) {
        this.navCtrl.push(PetaPage);
    };
    // 2
    HomePage.prototype.kantorpolisi = function (event) {
        this.navCtrl.push(KantorpolisiPage);
    };
    // 3
    HomePage.prototype.kontak = function (event) {
        this.navCtrl.push(KontakPage);
    };
    // 4
    HomePage.prototype.sp2hp = function (event) {
        this.navCtrl.push(Sp2hpPage);
    };
    // 5
    HomePage.prototype.bantuan = function (event) {
        this.navCtrl.push(AduanPage);
    };
    // 6
    HomePage.prototype.layanan = function (event) {
        this.navCtrl.push(LayananPage);
    };
    // 7
    HomePage.prototype.bhabinkamtibnas = function (event) {
        this.navCtrl.push(BhabinkamtibnasPage);
    };
    // 8
    HomePage.prototype.berita = function (event) {
        this.navCtrl.push(BeritaPage);
    };
    // 9
    HomePage.prototype.callCenter = function (n) {
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
    HomePage.prototype.panic = function (event) {
        this.navCtrl.push(PanicPage);
    };
    HomePage = __decorate([
        Component({
            selector: 'page-home',
            templateUrl: 'home.html'
        }),
        __metadata("design:paramtypes", [NavController,
            CallNumber,
            ToastController,
            ModalController])
    ], HomePage);
    return HomePage;
}());
export { HomePage };
//# sourceMappingURL=home.js.map