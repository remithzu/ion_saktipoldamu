var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { CallNumber } from '@ionic-native/call-number';
import { HTTP } from '@ionic-native/http';
import { HttpModule } from '@angular/http';
import { Geolocation } from '@ionic-native/geolocation';
import { Camera } from '@ionic-native/camera';
import { IonicStorageModule } from '@ionic/storage';
import { FileTransfer } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';
import { AppVersion } from '@ionic-native/app-version';
import { GoogleMaps } from '@ionic-native/google-maps';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { TabsPage } from '../pages/tabs/tabs';
import { HomePage } from '../pages/home/home';
import { HistoryPage } from '../pages/history/history';
import { HistorydtlPage } from '../pages/historydtl/historydtl';
import { HelpPage } from '../pages/help/help';
import { MyaccountPage } from '../pages/myaccount/myaccount';
import { PetaPage } from '../pages/peta/peta';
import { KantorpolisiPage } from '../pages/kantorpolisi/kantorpolisi';
import { KantorpolisidtlPage } from '../pages/kantorpolisidtl/kantorpolisidtl';
import { Sp2hpPage } from '../pages/sp2hp/sp2hp';
import { Sp2hpaddPage } from '../pages/sp2hpadd/sp2hpadd';
import { Sp2hpformPage } from '../pages/sp2hpform/sp2hpform';
import { AduanPage } from '../pages/aduan/aduan';
import { KontakPage } from '../pages/kontak/kontak';
import { LayananPage } from '../pages/layanan/layanan';
import { BhabinkamtibnasPage } from '../pages/bhabinkamtibnas/bhabinkamtibnas';
import { BeritaPage } from '../pages/berita/berita';
import { ProfilePage } from '../pages/profile/profile';
import { AboutPage } from '../pages/about/about';
import { RegisterPage } from '../pages/register/register';
import { LoginPage } from '../pages/login/login';
import { PasswordPage } from '../pages/password/password';
import { PanicPage } from '../pages/panic/panic';
import { DemoPage } from '../pages/demo/demo';
import { Menu01Page } from '../pages/menu/menu01/menu01';
import { Menu02Page } from '../pages/menu/menu02/menu02';
import { Menu03Page } from '../pages/menu/menu03/menu03';
import { Menu04Page } from '../pages/menu/menu04/menu04';
import { Menu05Page } from '../pages/menu/menu05/menu05';
import { Menu06Page } from '../pages/menu/menu06/menu06';
import { Menu07Page } from '../pages/menu/menu07/menu07';
import { Menu08Page } from '../pages/menu/menu08/menu08';
import { Menu09Page } from '../pages/menu/menu09/menu09';
import { Menu10Page } from '../pages/menu/menu10/menu10';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        NgModule({
            declarations: [
                MyApp,
                HomePage,
                TabsPage,
                HistoryPage,
                HistorydtlPage,
                HelpPage,
                MyaccountPage,
                BeritaPage,
                BhabinkamtibnasPage,
                PetaPage,
                KantorpolisiPage,
                KantorpolisidtlPage,
                AduanPage,
                KontakPage,
                LayananPage,
                ProfilePage,
                AboutPage,
                RegisterPage,
                LoginPage,
                PasswordPage,
                Sp2hpPage,
                Sp2hpformPage,
                Sp2hpaddPage,
                PanicPage,
                DemoPage,
                Menu01Page,
                Menu02Page,
                Menu03Page,
                Menu04Page,
                Menu05Page,
                Menu06Page,
                Menu07Page,
                Menu08Page,
                Menu09Page,
                Menu10Page
            ],
            imports: [
                BrowserModule,
                HttpModule,
                IonicModule.forRoot(MyApp, { tabsHideOnSubPages: true }),
                IonicStorageModule.forRoot()
            ],
            bootstrap: [IonicApp],
            entryComponents: [
                MyApp,
                HomePage,
                TabsPage,
                HistoryPage,
                HistorydtlPage,
                HelpPage,
                MyaccountPage,
                BeritaPage,
                BhabinkamtibnasPage,
                PetaPage,
                KantorpolisiPage,
                KantorpolisidtlPage,
                AduanPage,
                KontakPage,
                LayananPage,
                ProfilePage,
                AboutPage,
                RegisterPage,
                LoginPage,
                PasswordPage,
                Sp2hpPage,
                Sp2hpformPage,
                Sp2hpaddPage,
                PanicPage,
                DemoPage,
                Menu01Page,
                Menu02Page,
                Menu03Page,
                Menu04Page,
                Menu05Page,
                Menu06Page,
                Menu07Page,
                Menu08Page,
                Menu09Page,
                Menu10Page
            ],
            providers: [
                CallNumber,
                HTTP,
                Geolocation,
                Camera,
                StatusBar,
                FileTransfer,
                File,
                AppVersion,
                GoogleMaps,
                SplashScreen,
                { provide: ErrorHandler, useClass: IonicErrorHandler }
            ]
        })
    ], AppModule);
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=app.module.js.map