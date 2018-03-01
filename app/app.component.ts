import { Component } from '@angular/core';
import { SliderServiceService } from './slider-service.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public userData:any;
  constructor(private userServ: SliderServiceService){
      this.userServ.getUserDetails().subscribe(res=>{
        this.userData=res;
      })
  }
  getStatus(event){
    this.userData=this.userServ.sortDataBasedOnStatus(event);
  }
}
