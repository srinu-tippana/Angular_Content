import { Component, OnInit } from '@angular/core';
import {Route, Router, NavigationExtras, ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) 
  { }

  pipeDemo()
  {
    this.router.navigate([{},'pipedemo'],{relativeTo: this.route});
  }
  ngOnInit(): void {
  }

}
