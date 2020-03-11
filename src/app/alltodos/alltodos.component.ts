import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-alltodos',
  templateUrl: './alltodos.component.html',
  styleUrls: ['./alltodos.component.css']
})
export class AlltodosComponent implements OnInit {
public data = [];
  constructor(private todo: DataService) { }

  ngOnInit() {
    this.data = this.todo.data;
  }
done(i){
  this.data[i].done = true;
 // this.todo.data = this.data
 console.log(i)
// console.log(this.todo.data[i]);
 this.data[i].done = "completted";
 this.todo.data = this.data;
}
dellete(i){
  this.todo.data.splice(i,i+1);
}
}
