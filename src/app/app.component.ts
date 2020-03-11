import { Component } from '@angular/core';
import { SafePipe } from './safePipe';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public answer:number;
  public bool: boolean;
constructor(private data: DataService){
}
ngOnInit(){
if(this.answer == undefined){
  this.bool = false;
}
}
calculate(){
  if(this.data.data.length != 0){
      this.bool = true;
let compl;
let done = this.data.data.filter((val)=>{
   return val.done == 'completted';
});
compl = done.length;
 this.answer = compl/this.data.data.length

  }

}
  
}
