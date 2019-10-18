import { Component, OnInit } from '@angular/core';
import { Organisation } from './organisation';

@Component({
  selector: 'app-organisation',
  templateUrl: './organisation.component.html',
  styleUrls: ['./organisation.component.css']
})
export class OrganisationComponent implements OnInit {

  constructor() { }
  public model:Organisation = <Organisation>{};
  ngOnInit() {
  }

}
