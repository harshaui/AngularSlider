import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';



@Component({
  selector: 'slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
 @Input() userData: any;
  val: number;
  @Output() changeStatus:EventEmitter<string> = new EventEmitter<string>();
  constructor( ) { }

  ngOnInit() {
  }

   sortData(event,state){
    if(event.target.checked){
      this.changeStatus.emit(state);       
   }else{
     this.changeStatus.emit('All');   
   }
   }
   handleChange(e){
     if(this.val === 0)
      this.changeStatus.emit('All'); 
      else if(this.val === 20)
      this.changeStatus.emit('Expired'); 
      else if(this.val === 40)
      this.changeStatus.emit('Future'); 
      else if(this.val === 60)
      this.changeStatus.emit('Active'); 
      else if(this.val === 100)
      this.changeStatus.emit('All'); 
   }
}
