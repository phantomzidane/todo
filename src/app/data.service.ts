import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
public data = [];
  constructor() { }

  getData(){
     return this.data;
  }
  set userdata(val:any){
    this.data.push(val)
  }
}
