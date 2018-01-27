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
import { NavController } from 'ionic-angular';
import { AppVersion } from '@ionic-native/app-version';
var AboutPage = /** @class */ (function () {
    function AboutPage(navCtrl, appVersion) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.appVersion = appVersion;
        // this.tabBarElement = document.querySelector('.tabbar.show-tabbar');
        this.appVersion.getAppName()
            .then(function (data) {
            _this.AppName = data;
        })
            .catch(function (error) {
            _this.AppName = error;
        });
        this.appVersion.getPackageName()
            .then(function (data) {
            _this.PackageName = data;
        })
            .catch(function (error) {
            _this.PackageName = error;
        });
        this.appVersion.getVersionCode()
            .then(function (data) {
            _this.VersionCode = data;
        })
            .catch(function (error) {
            _this.VersionCode = error;
        });
        this.appVersion.getVersionNumber()
            .then(function (data) {
            _this.VersionNumber = data;
        })
            .catch(function (error) {
            _this.VersionNumber = error;
        });
    }
    AboutPage = __decorate([
        Component({
            selector: 'page-about',
            templateUrl: 'about.html'
        }),
        Injectable(),
        __metadata("design:paramtypes", [NavController,
            AppVersion])
    ], AboutPage);
    return AboutPage;
}());
export { AboutPage };
//# sourceMappingURL=about.js.map