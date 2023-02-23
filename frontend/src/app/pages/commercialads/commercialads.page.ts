import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';  

@Component({
  selector: 'app-commercialads',
  templateUrl: './commercialads.page.html',
  styleUrls: ['./commercialads.page.scss'],
})
export class CommercialadsPage implements OnInit {

  constructor(private router: Router, private navCtrl: NavController) { }

  ngOnInit() {
  }

  goToStickyAds() {  
    this.router.navigate(['products']);  
  }  

  goToHome() {  
    this.router.navigate(['home']);  
  } 
  
  goBack() {
    this.navCtrl.back();
  }
  
  goToAddNewAd(){
    this.router.navigate(['add-new-advertisement']);  
  }

}
