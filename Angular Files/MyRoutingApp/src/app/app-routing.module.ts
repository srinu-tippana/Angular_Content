import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryGuardService } from './category-guard.service';
import { CategoryComponent } from './category/category.component';
import {LoginComponent} from './login/login.component';
import { PipeDemoComponent } from './pipe-demo/pipe-demo.component';
import { RegisterComponent} from './register/register.component';

const routes: Routes = [
  {path:'',redirectTo:'/login',pathMatch:'full'},
  /* when the request is local host/4200 then only will ber edirected*/
  {path:'login', component:LoginComponent},
  {path:'signup', component:RegisterComponent},
  /* this below path  here sees that we acess category path through signup */
  /* we made path in ssuch way signup/category means upto signup we will get through 
  localhost:4200/signup  and that is acessible only throgugh signup path only */
  {path:'signup/category', component: CategoryComponent,canActivate:[CategoryGuardService]},

  /* Regarding this guard service intially register to cateory was direct but now we kept category guard service in between that makes it navigate to login */


  /* here below we added category directly this will allow direct acess*/
  {path:'category', component: CategoryComponent},
 // {path:'pipe', component:PipeDemoComponent},
  {path:'login', component: PipeDemoComponent,
    children:[
      {path:'pipedemo', component: PipeDemoComponent, canActivateChild:[]},
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
