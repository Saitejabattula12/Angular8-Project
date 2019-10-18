import { Component, OnInit } from '@angular/core';
import { landing } from './landing';
import { IcamServiceService } from '../icam-service.service';
@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  public model:landing = <landing>{};
  constructor(private icamService:IcamServiceService) { }
  public userList=[];
  public searchType=""
  ngOnInit() {
  }

  public getSearchItem(event:any){
    switch(event.target.value){
      case 'users':{
        this.searchType=event.target.value;
      }
      case 'org':{
        this.searchType=event.target.value;
      }
    }
    if(event.target.value){
      this.icamService.getAll(event.target.value).subscribe((resp)=>{
        this.userList=resp as any;
      });
    }
  }
}
