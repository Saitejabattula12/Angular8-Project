import { Component, OnInit } from '@angular/core';
import { Login } from './login';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private route:Router) { }
  public model:Login = <Login>{};
  private errorText:string = "Please enter username and password";
  ngOnInit() {
  }
  public signin():void{
    if(this.model.username !== undefined && this.model.password !== undefined){
      this.route.navigate(['/landing']);
    }else{
      alert(this.errorText)
    }
  }
}
