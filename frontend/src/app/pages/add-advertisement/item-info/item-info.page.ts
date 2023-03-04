import { Component, OnInit} from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { HttpClient} from '@angular/common/http';
import * as $ from 'jquery';
// import 'select2';
// import '../../../assets/select2.css';

@Component({
  selector: 'app-item-info',
  templateUrl: './item-info.page.html',
  styleUrls: ['./item-info.page.scss'],
})
export class ItemInfoPage implements OnInit {

  items: any = [];
  values: any = [];

  constructor(private router: Router, private navCtrl: NavController, public http: HttpClient) { 
    this.http.get("https://specbits.com/class2/fab/newform").subscribe((res: any) => {

    
      // if(res[3].tag == "input"){
      //   this.items = '<ion-input type="'+ res[3].type+'" placeholder="Enter something"/>'
      // }else if(res[0].tag == "select"){
      //   this.items = '<select name="cars" id="cars"><option value="volvo">Volvo</option><option value="saab">Saab</option><option value="mercedes">Mercedes</option></select>'
      // }

      for(let i=0; i<res.length; i++){
        if(res[i].tag == "select2"){
          let options: any = [];
          if(res[i].form_field_id == 1){
            for(let j=0; j<res[7].length; j++){
              options.push(res[7][j].value);
            }
          }else if(res[i].form_field_id == 2){
            for(let j=0; j<res[8].length; j++){
              options.push(res[8][j].value);
            }
          }else if(res[i].form_field_id == 3){
            for(let j=0; j<res[9].length; j++){
              options.push(res[9][j].value);
            }
          }

          this.values.push(options);
          
          this.items.push(
          '<p style="font-size:18px; font-weight:700">'+res[i].label+'</p><select style="width:100%;border: 1px solid #d9d9d9; font-size: 16px; font-weight: normal; margin-bottom: 20px; border-radius: 5px"><option *ngFor="let value of values">value</option></select>')
        }else if(res[i].tag == "input"){
          this.items.push(
          '<p style="font-size:18px; font-weight:700">'+res[i].label+'</p><ion-input type="'+ res[i].type+'"  placeholder="'+res[i].placeholder+'" style="width:100%;border: 1px solid #d9d9d9; font-size: 16px; font-weight: normal; margin-bottom: 20px; border-radius: 5px"/>')
        }else if(res[i].tag == "check"){
          this.items.push(
            '<div style="display:flex; align-items:center; gap:10px; margin-bottom: 15px; font-weight:normal; font-size: 16px"><ion-checkbox slot="start"></ion-checkbox><ion-label>'+res[i].label+'</ion-label></div>'
          )
        }
      }

      console.log(res);

    },(error:any) => {
      console.log("ErrorMessage: ", error)
    });
  }

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
    // $(document).ready(() => {
    //   $('#mySelect').select2({
    //     placeholder: 'Select an option',
    //     data: this.data.map((option) => ({ id: option.id, text: option.text }))
    //   });
    // });
    
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
