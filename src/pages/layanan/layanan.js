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
import { IonicPage, NavController, NavParams } from 'ionic-angular';
/**
 * Generated class for the LayananPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LayananPage = /** @class */ (function () {
    function LayananPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.tabBarElement = document.querySelector('.tabbar.show-tabbar');
    }
    LayananPage.prototype.ionViewWillEnter = function () {
        this.tabBarElement.style.display = 'none';
    };
    LayananPage.prototype.ionViewWillLeave = function () {
        this.tabBarElement.style.display = 'flex';
    };
    LayananPage.prototype.takeMeBack = function () {
        this.navCtrl.parent.select(0);
    };
    LayananPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-layanan',
            templateUrl: 'layanan.html',
        }),
        __metadata("design:paramtypes", [NavController, NavParams])
    ], LayananPage);
    return LayananPage;
}());
export { LayananPage };
//# sourceMappingURL=layanan.js.map