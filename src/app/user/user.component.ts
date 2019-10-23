import { Component, OnInit } from '@angular/core';
import { user } from './user';
import { IcamServiceService } from '../icam-service.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private router:ActivatedRoute, private icamService:IcamServiceService) { }
  public model:user = <user>{};
  public paidAdministrator:boolean = false;
  public paidMember:boolean = false;
  ngOnInit() {
    this.router.paramMap.subscribe(params => {
      let currParam = params as any;
      if(currParam.params.fname){
        let storeData = this.icamService.getStore();
        if(storeData){
          this.model = storeData.filter(sd=>currParam.params.fname==sd.fname)[0];
        }
      }
    });
  }

  public createUser():void{
    this.model.role = (this.paidAdministrator)?'ad':(this.paidMember)?'pa':'';
    if(this.model.id){
      this.icamService.update(this.model);
    }else{
    this.icamService.create(this.model);
    }
  }
}
