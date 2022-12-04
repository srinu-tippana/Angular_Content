import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent 
{
  title = 'MyApp';


  public btnCssstyle='btn btn-danger';
  public companyName="IBM";

  public age = parseInt(prompt("enter your age"));
  public IsDisabled=true;
  

  /* this is the disabling and enabling property for button it is directly set to the value*/
  constructor()
  {
    if(this.age>18)
    {
      this.IsDisabled=false;
    }
    else
    {
      this.IsDisabled=true;
    }
  }
  

  public buttonTxt="Click Me if you ar ane adult ";
  showMsg=($event)=>
  {
    console.log("Click Me Button is CLicked");
    this.buttonTxt="Generation Log File ..... Please Wait";
    setTimeout(()=>
    {
      this.buttonTxt="Log file Created";
    },5000)

  }

  updateCompanyName=($event)=>
  {
    this.companyName="IBM GLobal";
    this.companyName=$event.target.value;// this will get the input into text bos what we are passing to be diplayed onto the screen 
    console.log(this.companyName)
  }
 

}
