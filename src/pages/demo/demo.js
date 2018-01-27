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
import { IonicPage, NavController, NavParams, ViewController, Platform } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
/**
 * Generated class for the DemoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DemoPage = /** @class */ (function () {
    function DemoPage(navCtrl, navParams, platform, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.platform = platform;
        this.viewCtrl = viewCtrl;
        this.tabBarElement = document.querySelector('.tabbar.show-tabbar');
        platform.registerBackButtonAction(function () {
            viewCtrl.dismiss();
        });
    }
    DemoPage.prototype.ionViewDidLoad = function () {
        this.initializeBackButtonCustomHandler();
    };
    DemoPage.prototype.initializeBackButtonCustomHandler = function () {
        this.unregisterBackButtonAction = this.platform.registerBackButtonAction(function (event) {
        }, 101); // Priority 101 will override back button handling (we set in app.component.ts) as it is bigger then priority 100 configured in app.component.ts file */
    };
    DemoPage.prototype.ionViewWillEnter = function () {
        this.viewCtrl.showBackButton(false);
        this.viewCtrl.enableBack();
        this.unregisterBackButtonAction && this.unregisterBackButtonAction();
    };
    DemoPage.prototype.lewati = function () {
        this.navCtrl.setRoot(TabsPage);
    };
    DemoPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-demo',
            templateUrl: 'demo.html',
        }),
        __metadata("design:paramtypes", [NavController,
            NavParams,
            Platform,
            ViewController])
    ], DemoPage);
    return DemoPage;
}());
export { DemoPage };
//# sourceMappingURL=demo.js.map