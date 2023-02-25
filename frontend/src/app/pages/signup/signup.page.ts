import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
import { AlertController, LoadingController, ToastController } from '@ionic/angular';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  mobNumber: any;

  // disabledBtn;

  constructor(
    private router: Router, 
    public _apiService:ApiService,
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController,
    private alertCtrl: AlertController) { }


  // ionViewDidEnter(){
  //   this.disabledBtn = false;
  // }
  
  sendVerify(){

    if(this.mobNumber == null){
      this.errorToast("Please enter Mobile No. !");
    }else{
      // this.disabledBtn = true;
      // const loader = await this.loadingCtrl.create({
      //   message: "Please wait...",
      // });
      // loader.present();

      let data = {
        mobNumber: this.mobNumber,
        verifyCode: 123456
      }

      this._apiService.sendVerify(data).subscribe((res:any)=>{
        console.log("SuccessMessage: ", res);
        this.mobNumber="";
        this.successToast("Account Created Successfully.");
        this.router.navigate(['login']);
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
