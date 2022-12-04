import { Component, EventEmitter, Input, OnInit,Output } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  // the value that we sent in  app component is recived here 
  @Input() public parentData;

  @Output() public childEvent = new EventEmitter();

  emitEventChild()
  {
    this.childEvent.emit('This Message is going from child component to parent component'); 
  }


}
