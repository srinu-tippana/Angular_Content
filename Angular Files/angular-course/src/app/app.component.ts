import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  data =
  {
    title:"Angular Core Deep Dive"
  };

  onLogoClicked()
  {
    alert("Hello World");
  }
  onKeyup(newTitle:string)
  {
    this.data.title=newTitle;
  }

}
