import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class IcamServiceService {
  storeObject:any;
  constructor(private httpClient: HttpClient) { }

  get(id: number) {
    return "get" + id;
  }
  create(value: any) {
    console.log("Service Layer ==== create===", value);
    return "create";
  }
  update(value: any) {
    console.log("Service Layer ==== update===", value);
    return "update";
  }
  delete(id: number,type:string) {
    console.log("Service Layer ==== Delete===", id,type);
    return "delete" + id;
  }
  getAll(url) {
    return this.httpClient.get("assets/" + url + ".json");
  }

  getStore(){
    return this.storeObject;
  }
  setStore(value:any){
    this.storeObject = value;
  }
}
