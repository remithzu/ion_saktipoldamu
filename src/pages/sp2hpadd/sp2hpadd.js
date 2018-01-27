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
import { IonicPage, NavController, NavParams, ToastController, LoadingController, } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Validators, FormBuilder } from '@angular/forms';
import { Http, RequestOptions, Headers } from '@angular/http';
/**
 * Generated class for the Sp2hpaddPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Sp2hpaddPage = /** @class */ (function () {
    function Sp2hpaddPage(navCtrl, navParams, toasCtrl, storage, http, formBuilder, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toasCtrl = toasCtrl;
        this.storage = storage;
        this.http = http;
        this.formBuilder = formBuilder;
        this.loadingCtrl = loadingCtrl;
        this.submitAttempt = false;
        this.phoneid = navParams.get('phone');
        this.sp2hpform = this.formBuilder.group({
            field_name: ['', Validators.required],
            field_phone: ['', Validators.required],
            field_email: ['', Validators.required],
            field_umur: ['', Validators.required],
            field_gender: ['', Validators.required],
            field_agama: ['', Validators.required],
            field_job: ['', Validators.required],
            field_kewarganegaraan: ['', Validators.required],
            field_address: ['', Validators.required],
            field_waktu: ['', Validators.required],
            field_tkp: ['', Validators.required],
            field_laporan: ['', Validators.required]
        });
    }
    Sp2hpaddPage.prototype.save = function () {
        var _this = this;
        this.submitAttempt = true;
        if (this.sp2hpform.valid) {
            var loading_1 = this.loadingCtrl.create({
                content: 'Please wait..',
                spinner: 'crescent'
            });
            loading_1.present();
            var headers = new Headers({ 'Content-Type': 'application/json' });
            var options = new RequestOptions({ headers: headers });
            var body = JSON.stringify({
                name: this.sp2hpform.value['field_name'],
                phone: this.sp2hpform.value['field_phone'],
                email: this.sp2hpform.value['field_email'],
                umur: this.sp2hpform.value['field_umur'],
                gender: this.sp2hpform.value['field_gender'],
                agama: this.sp2hpform.value['field_agama'],
                job: this.sp2hpform.value['field_job'],
                kewarganegaraan: this.sp2hpform.value['field_kewarganegaraan'],
                address: this.sp2hpform.value['field_address'],
                waktu: this.sp2hpform.value['field_waktu'],
                tkp: this.sp2hpform.value['field_tkp'],
                lapora: this.sp2hpform.value['field_lapora']
            });
            var link = 'http://malut.polri.go.id/sakti-poldamu/rest/sp2hpinsert/' + this.phoneid;
            this.http.post(link, body, options).map(function (res) { return res.json(); }).subscribe(function (data) {
                _this.toasCtrl.create({
                    message: 'Data berhasil disimpan!',
                    duration: 4000,
                    position: 'top',
                    showCloseButton: true,
                    closeButtonText: 'x',
                    dismissOnPageChange: true
                }).present();
            }, function (error) {
                loading_1.dismiss();
                _this.toasCtrl.create({
                    message: 'Gagal menyimpan data!',
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
    Sp2hpaddPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-sp2hpadd',
            templateUrl: 'sp2hpadd.html',
        }),
        Injectable(),
        __metadata("design:paramtypes", [NavController,
            NavParams,
            ToastController,
            Storage,
            Http,
            FormBuilder,
            LoadingController])
    ], Sp2hpaddPage);
    return Sp2hpaddPage;
}());
export { Sp2hpaddPage };
//# sourceMappingURL=sp2hpadd.js.map