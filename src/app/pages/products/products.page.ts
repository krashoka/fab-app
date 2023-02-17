import { Component, OnInit } from '@angular/core';
import { InfiniteScrollCustomEvent } from '@ionic/angular';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class ProductsPage implements OnInit {
  items:any[] = [];

  constructor() { }

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
