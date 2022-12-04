import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PipeDemoComponent } from './pipe-demo/pipe-demo.component';
import { CategoryComponent } from './category/category.component';
import {CategoryGuardService} from  './category-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    PipeDemoComponent,
    CategoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [CategoryGuardService],
  /* after creating add that into providrs*/
  bootstrap: [AppComponent]
})
export class AppModule { }
