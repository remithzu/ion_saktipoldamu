var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ChangeDetectionStrategy, Injectable } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, LoadingController, } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Validators, FormBuilder } from '@angular/forms';
import { Http, RequestOptions, Headers } from '@angular/http';
/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProfilePage = /** @class */ (function () {
    function ProfilePage(navCtrl, navParams, toasCtrl, storage, http, formBuilder, loadingCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toasCtrl = toasCtrl;
        this.storage = storage;
        this.http = http;
        this.formBuilder = formBuilder;
        this.loadingCtrl = loadingCtrl;
        this.submitAttempt = false;
        this.tabBarElement = document.querySelector('.tabbar.show-tabbar');
        this.phone = navParams.get('phone');
        this.storage.get('mydata')
            .then(function (data) {
            if (data) {
                _this.name = data['member_name'];
                _this.address = data['member_address'];
                _this.phonenbr = data['member_phone'];
            }
        });
        this.profiles = this.formBuilder.group({
            field_name: ['', Validators.required],
            field_address: ['', Validators.required],
            field_phone: ['', Validators.required]
        });
    }
    ProfilePage.prototype.save = function () {
        var _this = this;
        this.submitAttempt = true;
        if (this.profiles.valid) {
            var loading_1 = this.loadingCtrl.create({
                content: 'Please wait..',
                spinner: 'crescent'
            });
            loading_1.present();
            var headers = new Headers({ 'Content-Type': 'application/json' });
            var options = new RequestOptions({ headers: headers });
            var body = JSON.stringify({
                name: this.profiles.value['field_name'],
                address: this.profiles.value['field_address'],
                phone: this.profiles.value['field_phone']
            });
            console.log(body);
            var link = 'http://192.168.8.101/sakti-poldamu/rest/updatemember/' + this.phone;
            this.http.post(link, body, options).map(function (res) { return res.json(); }).subscribe(function (data) {
                loading_1.dismiss();
                _this.toasCtrl.create({
                    message: 'Update berhasil!',
                    duration: 4000,
                    position: 'top',
                    showCloseButton: true,
                    closeButtonText: 'x',
                    dismissOnPageChange: true
                }).present();
            }, function (error) {
                loading_1.dismiss();
                _this.toasCtrl.create({
                    message: 'Update gagal!',
                    duration: 4000,
                    position: 'top',
                    showCloseButton: true,
                    closeButtonText: 'x',
                    dismissOnPageChange: true
                }).present();
            });
        }
    };
    ProfilePage.prototype.ionViewWillEnter = function () {
        this.tabBarElement.style.display = 'none';
    };
    ProfilePage.prototype.ionViewWillLeave = function () {
        this.tabBarElement.style.display = 'flex';
    };
    ProfilePage.prototype.takeMeBack = function () {
        this.navCtrl.parent.select(0);
    };
    ProfilePage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-profile',
            templateUrl: 'profile.html',
            changeDetection: ChangeDetectionStrategy.OnPush
        }),
        Injectable(),
        __metadata("design:paramtypes", [NavController,
            NavParams,
            ToastController,
            Storage,
            Http,
            FormBuilder,
            LoadingController])
    ], ProfilePage);
    return ProfilePage;
}());
export { ProfilePage };
//# sourceMappingURL=profile.js.map