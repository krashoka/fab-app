import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';  

@Component({
  selector: 'app-commercialads',
  templateUrl: './commercialads.page.html',
  styleUrls: ['./commercialads.page.scss'],
})
export class CommercialadsPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToStickyAds() {  
    this.router.navigate(['products']);  
  }  

  goToHome() {  
    this.router.navigate(['home']);  
  } 

}
