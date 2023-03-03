import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-new-advertisement',
  templateUrl: './add-new-advertisement.page.html',
  styleUrls: ['./add-new-advertisement.page.scss'],
})
export class AddNewAdvertisementPage implements OnInit {

  categories: any = [];

  constructor(private router: Router, public http: HttpClient) {
    // **************** For Categories Icons Section *****************
    this.http.get("http://localhost/fabapp/backend/categoriesIcons.php").subscribe((res: any) => {

      this.categories = res;

      // console.log(res);

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

  goToCategories(){
    this.router.navigate(['categories']);  
  }

  goToAddNewAd(){
    this.router.navigate(['add-new-advertisement']);  
  }

  ngOnInit() {
  }

}
