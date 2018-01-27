import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, Platform } from 'ionic-angular';

import { TabsPage } from '../tabs/tabs';

/**
 * Generated class for the DemoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-demo',
  templateUrl: 'demo.html',
})
export class DemoPage {
  tabBarElement: any;
  unregisterBackButtonAction: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public platform: Platform,
    public viewCtrl: ViewController) {
    this.tabBarElement = document.querySelector('.tabbar.show-tabbar');
    platform.registerBackButtonAction(() => {
      viewCtrl.dismiss();
    });
  }

  ionViewDidLoad() {
    this.initializeBackButtonCustomHandler();
  }

  initializeBackButtonCustomHandler(): void {
    this.unregisterBackButtonAction = this.platform.registerBackButtonAction(function(event){
    }, 101); // Priority 101 will override back button handling (we set in app.component.ts) as it is bigger then priority 100 configured in app.component.ts file */
  }

  ionViewWillEnter() {
    this.viewCtrl.showBackButton(false);
    this.viewCtrl.enableBack();
    this.unregisterBackButtonAction && this.unregisterBackButtonAction();
  }
  
  lewati() {
  	this.navCtrl.setRoot(TabsPage);
  }

}
