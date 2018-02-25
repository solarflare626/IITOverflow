import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { HomePage } from '../home/home';
import { LoginPage } from '../login/login';
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {

	Tab1Root : any	= HomePage;
	Tab2Root : any	= LoginPage;
	Tab3Root : any	= HomePage;
  constructor(public navCtrl: NavController) {

  		

  }



}
