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
import { IonicPage, NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';
import { Validators, FormBuilder } from '@angular/forms';
import { Http, RequestOptions, Headers } from '@angular/http';
/**
 * Generated class for the PasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PasswordPage = /** @class */ (function () {
    function PasswordPage(navCtrl, navParams, loadingCtrl, toasCtrl, http, formBuilder) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.toasCtrl = toasCtrl;
        this.http = http;
        this.formBuilder = formBuilder;
        this.submitAttempt = false;
        this.tabBarElement = document.querySelector('.tabbar.show-tabbar');
        this.phone = navParams.get('phone');
        this.passwd = this.formBuilder.group({
            password: ['', Validators.required],
            newpassword: ['', Validators.required],
            repassword: ['', Validators.required]
        });
    }
    PasswordPage.prototype.ionViewWillEnter = function () {
        this.tabBarElement.style.display = 'none';
    };
    PasswordPage.prototype.ionViewWillLeave = function () {
        this.tabBarElement.style.display = 'flex';
    };
    PasswordPage.prototype.takeMeBack = function () {
        this.navCtrl.parent.select(0);
    };
    PasswordPage.prototype.save = function () {
        var _this = this;
        this.submitAttempt = true;
        if (this.passwd.valid) {
            var loading_1 = this.loadingCtrl.create({
                content: 'Please wait..',
                spinner: 'crescent'
            });
            loading_1.present();
            var headers = new Headers({ 'Content-Type': 'application/json' });
            var options = new RequestOptions({ headers: headers });
            var body = JSON.stringify({
                password: this.passwd.value['password'],
                newpassword: this.passwd.value['newpassword'],
                repassword: this.passwd.value['repassword']
            });
            var link = 'http://malut.polri.go.id/sakti-poldamu/rest/chpassword/' + this.phone;
            this.http.post(link, body, options).map(function (res) { return res.json(); }).subscribe(function (data) {
                loading_1.dismiss();
                if (data == 1) {
                    _this.toasCtrl.create({
                        message: 'Password salah!',
                        duration: 4000,
                        position: 'top',
                        showCloseButton: true,
                        closeButtonText: 'x',
                        dismissOnPageChange: true
                    }).present();
                }
                else if (data == 2) {
                    _this.toasCtrl.create({
                        message: 'Password baru tidak cocok!',
                        duration: 4000,
                        position: 'top',
                        showCloseButton: true,
                        closeButtonText: 'x',
                        dismissOnPageChange: true
                    }).present();
                }
                else {
                    _this.toasCtrl.create({
                        message: 'Password berhasil diubah!',
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
                    message: 'Gagal mengganti Password!',
                    duration: 4000,
                    position: 'top',
                    showCloseButton: true,
                    closeButtonText: 'x',
                    dismissOnPageChange: true
                }).present();
            });
        }
    };
    PasswordPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-password',
            templateUrl: 'password.html',
        }),
        __metadata("design:paramtypes", [NavController,
            NavParams,
            LoadingController,
            ToastController,
            Http,
            FormBuilder])
    ], PasswordPage);
    return PasswordPage;
}());
export { PasswordPage };
//# sourceMappingURL=password.js.map