import { Component ,OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http'; 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit
{
  title = 'PublicFetchAPI';
  data={};

  constructor(private http:HttpClient)/*local object http of type httpclent*/
  {

  }
  ngOnInit()
  {
    // 'https://reqres.in/api/users/4'
    this.http.get<any>('https://reqres.in/api/users/4').subscribe(
      data=>
      {          
        console.log("entering the data module");
        
        console.log(data.data);/*here the first data is the local object in line 11 ti that we are adding the dat from public api*/
        console.log("perfmoing stringify");
        this.data=JSON.stringify(data.data);   
        console.log("after stringify");

        console.log(this.data);

      }


    )
  }
}
