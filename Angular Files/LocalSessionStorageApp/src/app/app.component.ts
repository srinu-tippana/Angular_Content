import { LOCAL_STORAGE, SESSION_STORAGE } from 'ngx-webstorage-service';
import { LocalStorageService } from './local-storage.service';
import { WebStorageService } from './web-storage.service';
import { Component, Output } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'LocalSessionStorageApp';
 @Output() public courseName="Angular Development!";
 /* this will make the output to be emitted this particular course name 
 will be acessible by other elements also the place where you need to get this should
 have input */

 public message;
  constructor( private _web_storage:WebStorageService)
  {


  }

  ngOnInit():void
  {
    const newTask="New Task"
    this._web_storage.storeOnStorageService(newTask);

  }
}
