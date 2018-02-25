import { Component,ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Content } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  questions = [];
  length = 0;
  totalLength = 0;
  reachedTen = false;
  noMoreItemsAvailable = false;
  @ViewChild(Content) content: Content;

  
  constructor(public navCtrl: NavController) {
  		this.loadfive();
  	
  }
  loadfive(){

  	for (var i = 0; i < 5; i++) {
      this.questions.push(this.totalLength);
      this.length++;
      this.totalLength++;
    }
  }
  

  
  loadMore(infiniteScroll) {
    
   	
  	setTimeout(() => {
   
     	this.questions.push(this.totalLength);
    	this.length++;
    	this.totalLength++;

	    if ( this.totalLength >= 30) {
	      this.noMoreItemsAvailable = true;
	    }
	    if ( this.length >= 10) {
	      this.reachedTen = true;
	    }

      
      infiniteScroll.complete();
     }, 500);

    
  };

  doRefresh(refresher) {
    //console.log('Begin async operation', refresher);

    setTimeout(() => {
      //console.log('Async operation has ended');
      this.questions = [];
      this.length = 0;
      this.totalLength = 0;
      this.reachedTen = false;
      this.content.scrollTo(0,0,0);
      this.loadfive();

      refresher.complete();
    }, 2000);
  }

  scrollToTop() {
    this.content.scrollToTop();
  }
  next($event){
  	this.length = 0;
  	this.reachedTen = false;
  	this.questions = [];
  	
  	this.content.scrollTo(0,0,0);
  	this.loadfive();
  }


   

}
