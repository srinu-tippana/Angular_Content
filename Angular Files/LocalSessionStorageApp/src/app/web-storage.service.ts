import { Inject, Injectable } from '@angular/core';
import {SESSION_STORAGE,LOCAL_STORAGE,localStorageFactory,sessionStorageFactory,StorageService} from 'ngx-webstorage-service';



@Injectable({
  providedIn: 'root'
})
export class WebStorageService {

  STORAGE_KEY="local_tasklist";
  /*storage service is for storing any data */
  /* local sroage is for storing locally or session wise */
  /* change it to session storage @inject then it will store session wise*/
  /* change here for local storage tos ession storage*/
  constructor(@Inject(SESSION_STORAGE) public storage:StorageService)
  {

  }
  public storeOnStorageService(taskTitle:string):void
  {
    const currentTaskList=this.storage.get(this.STORAGE_KEY) || [];
    currentTaskList.push({

      title:taskTitle,
      isChecked:true
    })
    this.storage.set(this.STORAGE_KEY,currentTaskList);
    console.log(this.storage.get(this.STORAGE_KEY));
    /* this is the like passing the key to get data  */

   



  }


}
