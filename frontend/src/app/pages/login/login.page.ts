import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router'; 
import { ToastController } from '@ionic/angular';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  countryCode: any = "973";
  user_mob: any;
  user_pwd: any;
  
  constructor(private router: Router, public _apiService:ApiService,
    private toastCtrl: ToastController,) { }

  loginUser(){
      let data = {
        countryCode: this.countryCode,
        user_mob: this.user_mob,
        user_pwd: this.user_pwd
      }
  
      this._apiService.loginUser(data).subscribe((res:any)=>{
        // console.log("SuccessMessage: ", res);
        console.log(res);
        if(res == "success"){
          this.successToast("Logged in Successfully.");
          this.router.navigate(['home']); 
        }else if(res == "wrongpwd"){
          this.errorToast("Wrong Password !")
        }else{
          this.errorToast("Number not registered!");
        }
        
      },(er:any) => {
        console.log("ErrorMessage: ", er)
        if(er.error.errors.user_mob){
          if(er.error.errors.user_mob == "The user mob field is required."){
          this.errorToast("Mobile number is required!");
          }else if(er.error.errors.user_mob == "The user mob field must be a number."){
            this.errorToast("Invalid Number!");
          }
        }else if(er.error.errors.user_pwd){
          this.errorToast("Password is required!");
        }
      })
    
  }

  async errorToast(a){
    const toast = await this.toastCtrl.create({
      message: a,
      duration: 1500,
      position:'top',
      cssClass: 'errorToast'
    });
    toast.present();
  }

  async successToast(a){
    const toast = await this.toastCtrl.create({
      message: a,
      duration: 1500,
      position:'top',
      cssClass: 'successToast'
    });
    toast.present();
  }

  goToHome() {  
    this.router.navigate(['home']);  
  } 

  ngOnInit() {
  }

}
