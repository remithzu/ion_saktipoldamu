import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Menu01Page } from '../menu/menu01/menu01';
import { Menu02Page } from '../menu/menu02/menu02';
import { Menu03Page } from '../menu/menu03/menu03';
import { Menu04Page } from '../menu/menu04/menu04';
import { Menu05Page } from '../menu/menu05/menu05';
import { Menu06Page } from '../menu/menu06/menu06';
import { Menu07Page } from '../menu/menu07/menu07';
import { Menu08Page } from '../menu/menu08/menu08';
import { Menu09Page } from '../menu/menu09/menu09';
import { Menu10Page } from '../menu/menu10/menu10';

/**
 * Generated class for the HelpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-help',
  templateUrl: 'help.html',
})
export class HelpPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  menu01() {
  	this.navCtrl.push(Menu01Page);
  }
  menu02() {
  	this.navCtrl.push(Menu02Page);
  }
  menu03() {
  	this.navCtrl.push(Menu03Page);
  }
  menu04() {
  	this.navCtrl.push(Menu04Page);
  }
  menu05() {
  	this.navCtrl.push(Menu05Page);
  }
  menu06() {
  	this.navCtrl.push(Menu06Page);
  }
  menu07() {
  	this.navCtrl.push(Menu07Page);
  }
  menu08() {
  	this.navCtrl.push(Menu08Page);
  }
  menu09() {
  	this.navCtrl.push(Menu09Page);
  }
  menu10() {
  	this.navCtrl.push(Menu10Page);
  }

}
