import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';

import { HomePage } from '../home/home';
import { HistoryPage } from '../history/history';
import { HelpPage } from '../help/help';
import { MyaccountPage } from '../myaccount/myaccount';

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = HistoryPage;
  tab3Root = HelpPage;
  tab4Root = MyaccountPage;

  constructor() {

  }
}
