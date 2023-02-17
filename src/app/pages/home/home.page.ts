import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}
  option = {
    slidesPerView: 1,
    centeredSlides: true,
    loop: true,
    spaceBetween: 2,
    autoplay:true,
  }
}
