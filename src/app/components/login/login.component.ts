import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router'; //เปลี่ยนหน้า บังคับทิศทางของหน้า

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private username:string;
  private password:string;
  private result_text:string; // รับ response

  constructor(private loginService:LoginService,private router:Router) { }

  ngOnInit() {


  }

  login(username,password){

    this.loginService.login(username,password).subscribe((response) => {
      if(response.success == "true"){
          // this.result_text = "passed !";
          this.loginService.setUserLoggedIn();
          this.router.navigate(['home']); //ถ้าเป็น true go to home
          console.log("Logging in ...");
      }else{
          this.result_text = "incorrect username or password!"; //ถ้าเป็น false
      }
    })
    return false; //page no refresh
  }

}

