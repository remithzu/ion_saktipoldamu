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
import { IonicPage, NavController, NavParams, ViewController, Platform, ToastController, LoadingController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Validators, FormBuilder } from '@angular/forms';
import { Http, RequestOptions, Headers } from '@angular/http';
import { RegisterPage } from '../register/register';
import { TabsPage } from '../tabs/tabs';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams, viewCtrl, platform, storage, http, loadingCtrl, toasCtrl, formBuilder) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.platform = platform;
        this.storage = storage;
        this.http = http;
        this.loadingCtrl = loadingCtrl;
        this.toasCtrl = toasCtrl;
        this.formBuilder = formBuilder;
        this.submitAttempt = false;
        this.tabBarElement = document.querySelector('.tabbar.show-tabbar');
        platform.registerBackButtonAction(function () {
            viewCtrl.dismiss();
        });
        this.signin = this.formBuilder.group({
            phonenbr: ['', Validators.required],
            password: ['', Validators.required]
        });
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        this.initializeBackButtonCustomHandler();
    };
    LoginPage.prototype.initializeBackButtonCustomHandler = function () {
        this.unregisterBackButtonAction = this.platform.registerBackButtonAction(function (event) {
        }, 101); // Priority 101 will override back button handling (we set in app.component.ts) as it is bigger then priority 100 configured in app.component.ts file */
    };
    LoginPage.prototype.ionViewWillEnter = function () {
        this.viewCtrl.showBackButton(false);
        this.viewCtrl.enableBack();
        this.unregisterBackButtonAction && this.unregisterBackButtonAction();
    };
    LoginPage.prototype.onPageDidEnter = function () {
        this.tabBarElement.style.display = 'none';
    };
    LoginPage.prototype.onPageWillLeave = function () {
        this.tabBarElement.style.display = 'block';
    };
    LoginPage.prototype.login = function () {
        var _this = this;
        this.submitAttempt = true;
        if (this.signin.valid) {
            var loading_1 = this.loadingCtrl.create({
                content: 'Please wait..',
                // duration: 10000,
                spinner: 'crescent'
            });
            loading_1.present();
            var headers = new Headers({ 'Content-Type': 'application/json' });
            var options = new RequestOptions({ headers: headers });
            var body = JSON.stringify({
                phonenbr: this.signin.value['phonenbr'],
                password: this.signin.value['password']
            });
            var link = 'http://malut.polri.go.id/sakti-poldamu/rest/signin';
            this.http.post(link, body, options).map(function (res) { return res.json(); }).subscribe(function (data) {
                loading_1.dismiss();
                _this.storage.set('mydata', data);
                _this.navCtrl.setRoot(TabsPage);
            }, function (error) {
                loading_1.dismiss();
                _this.toasCtrl.create({
                    message: 'Login gagal',
                    duration: 4000,
                    position: 'top',
                    showCloseButton: true,
                    closeButtonText: 'x',
                    dismissOnPageChange: true
                }).present();
            });
        }
        else {
            this.toasCtrl.create({
                message: 'Phone atau Password kosong!',
                duration: 3000,
                position: 'top',
                showCloseButton: true,
                closeButtonText: 'x',
                dismissOnPageChange: true
            }).present();
        }
    };
    LoginPage.prototype.register = function () {
        this.navCtrl.push(RegisterPage);
    };
    LoginPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-login',
            templateUrl: 'login.html',
        }),
        Injectable(),
        __metadata("design:paramtypes", [NavController,
            NavParams,
            ViewController,
            Platform,
            Storage,
            Http,
            LoadingController,
            ToastController,
            FormBuilder])
    ], LoginPage);
    return LoginPage;
}());
export { LoginPage };
//# sourceMappingURL=login.js.map