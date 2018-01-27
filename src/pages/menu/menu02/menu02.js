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
 * Generated class for the Menu02Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Menu02Page = /** @class */ (function () {
    function Menu02Page(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    Menu02Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Menu02Page');
    };
    Menu02Page = __decorate([
        IonicPage(),
        Component({
            selector: 'page-menu02',
            templateUrl: 'menu02.html',
        }),
        __metadata("design:paramtypes", [NavController, NavParams])
    ], Menu02Page);
    return Menu02Page;
}());
export { Menu02Page };
//# sourceMappingURL=menu02.js.map