import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.page.html',
  styleUrls: ['./product-details.page.scss'],
})
export class ProductDetailsPage implements OnInit {

  constructor() { }

  option = {
    slidesPerView: 1,
    centeredSlides: true,
    loop: true,
    spaceBetween: 2,
  }

  ngOnInit() {
  }

}
