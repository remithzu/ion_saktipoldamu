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
 * Generated class for the Menu06Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Menu06Page = /** @class */ (function () {
    function Menu06Page(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    Menu06Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Menu06Page');
    };
    Menu06Page = __decorate([
        IonicPage(),
        Component({
            selector: 'page-menu06',
            templateUrl: 'menu06.html',
        }),
        __metadata("design:paramtypes", [NavController, NavParams])
    ], Menu06Page);
    return Menu06Page;
}());
export { Menu06Page };
//# sourceMappingURL=menu06.js.map