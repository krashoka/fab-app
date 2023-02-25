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

  mobNumber: any;
  password: any;

  constructor(private router: Router, public _apiService:ApiService,
    private toastCtrl: ToastController,) { }

  loginUser(){
    // console.log(this.mobNumber, this.password);
    if(this.mobNumber == null){
      this.errorToast("Please enter Mobile No. !");
    }else if(this.password == null){
      this.errorToast("Please enter Password !")
    }else{
      let data = {
        mobNumber: this.mobNumber,
        password: this.password
      }
  
      this._apiService.loginUser(data).subscribe((res:any)=>{
        // console.log("SuccessMessage: ", res);
        this.mobNumber="";
        this.password="";
        console.log(res.status);
        if(res.status == "Successful"){
          this.successToast("Logged in successfully :)");
          this.router.navigate(['home']); 
        }else if(res.status == "Error"){
          this.errorToast("Invalid Mobile No. and Password !")
        }
        
      },(error:any) => {
        console.log("ErrorMessage: ", error)
      })
    }
    
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
