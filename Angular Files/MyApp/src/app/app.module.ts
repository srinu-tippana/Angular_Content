import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { FacultyComponent } from './faculty/faculty.component';
import { StudentComponent } from './student/student.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    FacultyComponent,
    StudentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
