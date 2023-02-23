import { Component, OnInit} from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import * as $ from 'jquery';
import 'select2';
// import '../../../assets/select2.css';

@Component({
  selector: 'app-item-info',
  templateUrl: './item-info.page.html',
  styleUrls: ['./item-info.page.scss'],
})
export class ItemInfoPage implements OnInit {

  data = [
    { id: 1, text: 'Option 1' },
    { id: 2, text: 'Option 2' },
    { id: 3, text: 'Option 3' }
  ];

  constructor(private router: Router, private navCtrl: NavController) { }

  goToCommercialAds() {  
    this.router.navigate(['commercialads']);  
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

  goToUploadImage(){
    this.router.navigate(['uploadimage-page']);  
  }

  goToAddNewAd(){
    this.router.navigate(['add-new-advertisement']);  
  }

  

  ngOnInit() {
    $(document).ready(() => {
      $('#mySelect').select2({
        placeholder: 'Select an option',
        data: this.data.map((option) => ({ id: option.id, text: option.text }))
      });
    });
    
    // $(document).ready(() => {
    //   $('#mySelect').select2({
    //     placeholder: 'Select an option',
    //     minimumInputLength: 2,
    //     ajax: {
    //       url: 'http://example.com/data',
    //       dataType: 'json',
    //       processResults: (data) => {
    //         return {
    //           results: data.items.map((item) => {
    //             return { id: item.id, text: item.name };
    //           })
    //         };
    //       }
    //     }
    //   });
    // });
  }

}
