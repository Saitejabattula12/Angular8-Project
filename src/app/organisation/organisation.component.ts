import { Component, OnInit } from '@angular/core';
import { Organisation } from './organisation';
import { Router, ActivatedRoute } from '@angular/router';
import { IcamServiceService } from '../icam-service.service';

@Component({
  selector: 'app-organisation',
  templateUrl: './organisation.component.html',
  styleUrls: ['./organisation.component.css']
})
export class OrganisationComponent implements OnInit {

  constructor(private router:ActivatedRoute,private icamService:IcamServiceService) { }
  public model:Organisation = <Organisation>{};
  ngOnInit() {
    this.router.paramMap.subscribe(params => {
      let currParam = params as any;
      if(currParam.params.id){
        let storeData = this.icamService.getStore();
        if(storeData){
          this.model = storeData.filter(sd=>parseInt(currParam.params.id)==sd.id)[0];
        }
      }
    });
  }

}
