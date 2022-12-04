import { Component, OnInit } from '@angular/core';

import {Route, Router, NavigationExtras, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  /* here activateroute points to current route that is the regsiter component route*/
  /* the current activated route is localhost:4000/register */
  /* that activate route wil be captured and that  will stored in route */
  /* and the router object reference wil be here */
  constructor(private router: Router, private route: ActivatedRoute)
   { }

  public dept =[
    {"id":1},
    {"id":2},
  ];


  goToCat()
  {
                       // register/category
    console.log(this.route);
    this.router.navigate([{},'category'],{relativeTo:this.route});
    console.log({relativeTo:this.route});
    /* the first parameter is empty because we do relative routing so no base url needed*/
    /* the paramter will come from relative to this route*/
    /* in that we dont need localhost:4200/register*/
    /* we need to add in app routing module in such a way that category is acessed 
     through register component only we need to add path in such way */
  }

 /* goToDept()
  {
                       // register/category
    this.router.navigate([{},'dept'],{relativeTo:this.route});
  }*/


  ngOnInit(): void {
  }

}
