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
import { IonicPage, NavController, NavParams, ToastController, LoadingController } from 'ionic-angular';
import { Validators, FormBuilder } from '@angular/forms';
import { Storage } from '@ionic/storage';
import { Http, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { LoginPage } from '../login/login';
import { DemoPage } from '../demo/demo';
/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RegisterPage = /** @class */ (function () {
    // posts: any;
    function RegisterPage(navCtrl, navParams, toasCtrl, formBuilder, http, loadingCtrl, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toasCtrl = toasCtrl;
        this.formBuilder = formBuilder;
        this.http = http;
        this.loadingCtrl = loadingCtrl;
        this.storage = storage;
        this.submitAttempt = false;
        this.tabBarElement = document.querySelector('.tabbar.show-tabbar');
        this.signup = this.formBuilder.group({
            nama: ['', Validators.required],
            alamat: ['', Validators.required],
            phonenbr: ['', Validators.required],
            password: ['', Validators.required]
        });
    }
    RegisterPage.prototype.onPageDidEnter = function () {
        this.tabBarElement.style.display = 'none';
    };
    RegisterPage.prototype.onPageWillLeave = function () {
        this.tabBarElement.style.display = 'block';
    };
    RegisterPage.prototype.register = function () {
        var _this = this;
        this.submitAttempt = true;
        if (this.signup.valid) {
            var loading_1 = this.loadingCtrl.create({
                content: 'Please wait..',
                // duration: 10000,
                spinner: 'crescent'
            });
            loading_1.present();
            var headers = new Headers({ 'Content-Type': 'application/json' });
            var options = new RequestOptions({ headers: headers });
            var body = JSON.stringify({
                nama: this.signup.value['nama'],
                alamat: this.signup.value['alamat'],
                phonenbr: this.signup.value['phonenbr'],
                password: this.signup.value['password']
            });
            var link = 'http://malut.polri.go.id/sakti-poldamu/rest/register';
            this.http.post(link, body, options).map(function (res) { return res.json(); }).subscribe(function (data) {
                if (data != null) {
                    loading_1.dismiss();
                    _this.storage.set('mydata', data);
                    _this.navCtrl.push(DemoPage);
                }
                else {
                    loading_1.dismiss();
                    _this.toasCtrl.create({
                        message: 'No. Telp Sudah terdaftar!',
                        duration: 4000,
                        position: 'top',
                        showCloseButton: true,
                        closeButtonText: 'x',
                        dismissOnPageChange: true
                    }).present();
                }
            }, function (error) {
                loading_1.dismiss();
                _this.toasCtrl.create({
                    message: 'Pendaftaran gagal',
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
                message: 'Form belum lengkap!',
                duration: 3000,
                position: 'top',
                showCloseButton: true,
                closeButtonText: 'x',
                dismissOnPageChange: true
            }).present();
        }
    };
    RegisterPage.prototype.login = function () {
        this.navCtrl.setRoot(LoginPage);
    };
    RegisterPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-register',
            templateUrl: 'register.html',
        }),
        __metadata("design:paramtypes", [NavController,
            NavParams,
            ToastController,
            FormBuilder,
            Http,
            LoadingController,
            Storage])
    ], RegisterPage);
    return RegisterPage;
}());
export { RegisterPage };
//# sourceMappingURL=register.js.map