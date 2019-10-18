import { Component, OnInit } from '@angular/core';
import { user } from './user';
import { IcamServiceService } from '../icam-service.service';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private icamService:IcamServiceService) { }
  public model:user = <user>{};
  public paidAdministrator:boolean = false;
  public paidMember:boolean = false;
  ngOnInit() {
  }

  public createUser():void{
    this.model.role = (this.paidAdministrator)?'ad':(this.paidMember)?'pa':'';
    console.log(this.model);
    //this.icamService.create(this.model);
  }

}
