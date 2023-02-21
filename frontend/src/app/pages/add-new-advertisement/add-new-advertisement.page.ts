import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-new-advertisement',
  templateUrl: './add-new-advertisement.page.html',
  styleUrls: ['./add-new-advertisement.page.scss'],
})
export class AddNewAdvertisementPage implements OnInit {

  constructor(private router: Router) { }

  goToCommercialAds() {  
    this.router.navigate(['commercialads']);  
  }  

  goToStickyAds() {  
    this.router.navigate(['products']);  
  } 

  goToHome() {  
    this.router.navigate(['home']);  
  } 

  ngOnInit() {
  }

}
