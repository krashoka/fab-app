import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  mobNumber: any;

  constructor(private router: Router, public _apiService:ApiService) { }

  sendVerify(){
    let data = {
      mobNumber: this.mobNumber,
      verifyCode: 123456
    }

    this._apiService.sendVerify(data).subscribe((res:any)=>{
      console.log("SuccessMessage: ", res);
      this.mobNumber="";
    },(error:any) => {
      console.log("ErrorMessage: ", error)
    })
  }

  goToHome() {  
    this.router.navigate(['home']);  
  } 

  ngOnInit() {
  }

}
