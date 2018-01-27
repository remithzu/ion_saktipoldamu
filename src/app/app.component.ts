import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

// import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any;
  // rootPage = LoginPage;

  constructor(platform: Platform,
    statusBar: StatusBar,
    storage: Storage,
    splashScreen: SplashScreen) {
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
    });

    storage.get('mydata')
    .then((data) => {
      if (data) {
        this.rootPage = TabsPage;
      }
      else {
        this.rootPage = LoginPage;
      }
    });
  }
}

