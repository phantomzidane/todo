import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
model: any = {};
  constructor(private data: DataService) { }

  ngOnInit() {
  }
  add(form){
    form.value['done'] = 'uncompletted';
   this.data.userdata=form.value;
   console.log(form);
   form.resetForm(); 
  }

}
