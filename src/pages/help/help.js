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
import { Menu01Page } from '../menu/menu01/menu01';
import { Menu02Page } from '../menu/menu02/menu02';
import { Menu03Page } from '../menu/menu03/menu03';
import { Menu04Page } from '../menu/menu04/menu04';
import { Menu05Page } from '../menu/menu05/menu05';
import { Menu06Page } from '../menu/menu06/menu06';
import { Menu07Page } from '../menu/menu07/menu07';
import { Menu08Page } from '../menu/menu08/menu08';
import { Menu09Page } from '../menu/menu09/menu09';
import { Menu10Page } from '../menu/menu10/menu10';
/**
 * Generated class for the HelpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HelpPage = /** @class */ (function () {
    function HelpPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    HelpPage.prototype.menu01 = function () {
        this.navCtrl.push(Menu01Page);
    };
    HelpPage.prototype.menu02 = function () {
        this.navCtrl.push(Menu02Page);
    };
    HelpPage.prototype.menu03 = function () {
        this.navCtrl.push(Menu03Page);
    };
    HelpPage.prototype.menu04 = function () {
        this.navCtrl.push(Menu04Page);
    };
    HelpPage.prototype.menu05 = function () {
        this.navCtrl.push(Menu05Page);
    };
    HelpPage.prototype.menu06 = function () {
        this.navCtrl.push(Menu06Page);
    };
    HelpPage.prototype.menu07 = function () {
        this.navCtrl.push(Menu07Page);
    };
    HelpPage.prototype.menu08 = function () {
        this.navCtrl.push(Menu08Page);
    };
    HelpPage.prototype.menu09 = function () {
        this.navCtrl.push(Menu09Page);
    };
    HelpPage.prototype.menu10 = function () {
        this.navCtrl.push(Menu10Page);
    };
    HelpPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-help',
            templateUrl: 'help.html',
        }),
        __metadata("design:paramtypes", [NavController, NavParams])
    ], HelpPage);
    return HelpPage;
}());
export { HelpPage };
//# sourceMappingURL=help.js.map