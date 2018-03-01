import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class SliderServiceService {
 public result:any;
  constructor(private http: Http) { }
 getUserDetails(){
      return this.http.get('./assets/userData.json').map((res=>{
         this.result=JSON.parse(res['_body']);
        return this.result['usersDetails'];
      }));
   }
   sortDataBasedOnStatus(status){
    var userSortedData = [];
    if(status === 'All')
     return this.result['usersDetails'];
     else{
    for(var i=0;i<this.result['usersDetails'].length;i++){
       if(this.result['usersDetails'][i]['status']===status)
        userSortedData.push(this.result['usersDetails'][i]);
    }
    return userSortedData;
     }
   }
}
