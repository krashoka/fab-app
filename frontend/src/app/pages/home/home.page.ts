import { Component } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  // showCommercial= false;
  // showHomeContent = true;

  imageUrl: string[] = [];
  commercialImageUrl: string[] = [];
  
  categories: any = [];

  constructor(private router: Router, public http: HttpClient) { 

    this.http.get("http://localhost/fabapp/backend/crouselImg.php").subscribe((res: any) => {
        
      // console.log("Data fetched successfully: ",res);
      for(let i=0; i<res.length; i++){
        this.imageUrl.push('http://localhost/fabapp/crouselimg/' + res[i]);
      }

    },(error:any) => {
      console.log("ErrorMessage: ", error)
    });


    // **************** For Commercial tab image *****************
    this.http.get("http://localhost/fabapp/backend/commerceImg.php").subscribe((res: any) => {
        
      this.commercialImageUrl = res.map(imageName => 'http://localhost/fabapp/crouselimg/' + imageName);

    },(error:any) => {
      console.log("ErrorMessage: ", error)
    });


    // **************** For Categories Icons Section *****************
    this.http.get("http://localhost/fabapp/backend/categoriesIcons.php").subscribe((res: any) => {

      this.categories = res;

      console.log(res);

    },(error:any) => {
      console.log("ErrorMessage: ", error)
    });
  }

  // sanitizeHtml(html: string): SafeHtml {
  //   return this.sanitizer.bypassSecurityTrustHtml(html);
  // }


  option = {
    slidesPerView: 1,
    centeredSlides: true,
    loop: true,
    spaceBetween: 2,
    autoplay:true,
  }

  option2 = {
    slidesPerView: 4,
    // centeredSlides: true,
    loop: true,
    spaceBetween: 40,
    autoplay:true,
  }

  option3 = {
    slidesPerView: 2,
    // centeredSlides: true,
    loop: true,
    spaceBetween: 2,
    autoplay:true,
  }

  goToStickyAds() {  
    this.router.navigate(['products']);  
  } 

  goToAddNewAd(){
    this.router.navigate(['add-new-advertisement']);  
  }

  goToCommercialAds() {  
    this.router.navigate(['commercialads']);  
  } 
}
