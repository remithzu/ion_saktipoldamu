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
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { ProfilePage } from '../profile/profile';
import { AboutPage } from '../about/about';
import { LoginPage } from '../login/login';
import { PasswordPage } from '../password/password';
/**
 * Generated class for the MyaccountPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MyaccountPage = /** @class */ (function () {
    function MyaccountPage(navCtrl, storage, navParams, loadingCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.storage.get('mydata')
            .then(function (data) {
            if (data) {
                _this.posts = [data];
                _this.phone = data['member_phone'];
            }
        });
    }
    MyaccountPage.prototype.logout = function (event) {
        this.storage.set('mydata', null);
        var loader = this.loadingCtrl.create({
            content: "Please wait...",
            duration: 4000
        });
        loader.present();
        this.navCtrl.push(LoginPage);
    };
    MyaccountPage.prototype.gantipassword = function (event) {
        this.navCtrl.push(PasswordPage, { phone: event });
    };
    MyaccountPage.prototype.edit = function (event) {
        this.navCtrl.push(ProfilePage);
    };
    MyaccountPage.prototype.about = function (event) {
        this.navCtrl.push(AboutPage);
    };
    MyaccountPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-myaccount',
            templateUrl: 'myaccount.html',
        }),
        __metadata("design:paramtypes", [NavController,
            Storage,
            NavParams,
            LoadingController])
    ], MyaccountPage);
    return MyaccountPage;
}());
export { MyaccountPage };
//# sourceMappingURL=myaccount.js.map