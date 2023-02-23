import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  mobNumber: any;
  password: any;

  constructor(private router: Router) { }

  loginUser(){
    console.log(this.mobNumber, this.password)
  }

  goToHome() {  
    this.router.navigate(['home']);  
  } 

  ngOnInit() {
  }

}
