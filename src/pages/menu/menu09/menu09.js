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
 * Generated class for the Menu09Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Menu09Page = /** @class */ (function () {
    function Menu09Page(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    Menu09Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Menu09Page');
    };
    Menu09Page = __decorate([
        IonicPage(),
        Component({
            selector: 'page-menu09',
            templateUrl: 'menu09.html',
        }),
        __metadata("design:paramtypes", [NavController, NavParams])
    ], Menu09Page);
    return Menu09Page;
}());
export { Menu09Page };
//# sourceMappingURL=menu09.js.map