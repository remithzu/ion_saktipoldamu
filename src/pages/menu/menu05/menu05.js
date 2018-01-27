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
 * Generated class for the Menu05Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Menu05Page = /** @class */ (function () {
    function Menu05Page(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    Menu05Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Menu05Page');
    };
    Menu05Page = __decorate([
        IonicPage(),
        Component({
            selector: 'page-menu05',
            templateUrl: 'menu05.html',
        }),
        __metadata("design:paramtypes", [NavController, NavParams])
    ], Menu05Page);
    return Menu05Page;
}());
export { Menu05Page };
//# sourceMappingURL=menu05.js.map