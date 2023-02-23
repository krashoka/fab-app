import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(public http: HttpClient) { }

  sendVerify(data){
    console.log("data added :)")
    return this.http.post("http://localhost/fabapp/backend/signup.php", data);
  }
}
