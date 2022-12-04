import { Injectable } from '@angular/core';
import {Router,CanActivate,ActivatedRouteSnapshot,RouterStateSnapshot} from '@angular/router';
/* because its dealing with particular moment in time thats why its called snap shot*/

/* Service technically are dependencies of my project*/
/* Injectable annptater means its by default injectable can simple 
import in my  app module  */

@Injectable({
  providedIn: 'root'
})
export class CategoryGuardService implements CanActivate{

  constructor(private _router:Router) { }
  canActivate(route:ActivatedRouteSnapshot,state: RouterStateSnapshot):boolean
  {
    console.log("can Activate method triggered");
    alert("you are not allowed to acess the category without login ");
    this._router.navigate(['/login']);
    return true;
  }
}
