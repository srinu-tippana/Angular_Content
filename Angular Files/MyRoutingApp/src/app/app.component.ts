import { Component } from '@angular/core';
import {Route, Router, NavigationExtras, ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private router: Router, private route: ActivatedRoute) 
  { }
  pipeDemo()
  {
    /*this we cannot acess directly but when we set to path to login and click this button this will work */
    this.router.navigate([{},'pipedemo'],{relativeTo: this.route});
  }
  title = 'MyRoutingApp';
}
