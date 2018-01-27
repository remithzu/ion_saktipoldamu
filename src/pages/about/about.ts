import { Component, Injectable } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AppVersion } from '@ionic-native/app-version';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
@Injectable()
export class AboutPage {
	// tabBarElement: any;
  AppName: any;
  PackageName: any;
  VersionCode: any;
  VersionNumber: any;
  
  constructor(
    public navCtrl: NavController,
    private appVersion: AppVersion) {
		// this.tabBarElement = document.querySelector('.tabbar.show-tabbar');
    this.appVersion.getAppName()
    .then((data) =>{
      this.AppName = data;
    })
    .catch((error)=>{
      this.AppName = error;
    });

    this.appVersion.getPackageName()
    .then((data) =>{
      this.PackageName = data;
    })
    .catch((error)=>{
      this.PackageName = error;
    });

    this.appVersion.getVersionCode()
    .then((data) =>{
      this.VersionCode = data;
    })
    .catch((error)=>{
      this.VersionCode = error;
    });

    this.appVersion.getVersionNumber()
    .then((data) =>{
      this.VersionNumber = data;
    })
    .catch((error)=>{
      this.VersionNumber = error;
    });
  }

  // ionViewWillEnter() {
  //   this.tabBarElement.style.display = 'none';
  // }

  // ionViewWillLeave() {
  //   this.tabBarElement.style.display = 'flex';
  // }

  // takeMeBack() {
  //   this.navCtrl.parent.select(0);
  // }

}
