import { Component, OnInit } from '@angular/core';
import { landing } from './landing';
import { IcamServiceService } from '../icam-service.service';
@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  public model: landing = <landing>{};
  constructor(private icamService: IcamServiceService) { }
  public userList = [];
  public searchType = "";
  ngOnInit() {
    this.getData('users');
  }
  public getSearchItem(event: any) {
    if (event.target.value) {
      this.getData(event.target.value);
    }
  }
  private getData(value:string){
    this.searchType = value;
    this.model.searchItem = value;
    this.icamService.getAll(value).subscribe((resp) => {
      this.icamService.setStore(resp);
      this.userList = resp as any;
    });
  }
  public deleteRow(id:number,type:string):void{
    this.icamService.delete(id,type);
  }
}
