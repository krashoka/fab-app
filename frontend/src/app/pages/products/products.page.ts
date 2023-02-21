import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class ProductsPage implements OnInit {
  items:any[] = [];

  constructor(private router: Router, private navCtrl: NavController) { }

  goToCommercialAds() {  
    this.router.navigate(['commercialads']);  
  }  

  goToHome() {  
    this.router.navigate(['home']);  
  } 

  goBack() {
    this.navCtrl.back();
  }

  option = {
    slidesPerView: 2,
    // centeredSlides: true,
    spaceBetween: 4,
  }

  ngOnInit() {
    for (let i = 1; i < 51; i++) {
      this.items.push(i);
    }
  }



}
