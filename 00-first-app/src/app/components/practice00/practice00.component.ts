import { Component } from '@angular/core';
import { Practice00Service } from 'src/app/services/practice00.service';

@Component({
  selector: 'practice00',
  templateUrl: './practice00.component.html',
  styleUrls: ['./practice00.component.css']
})
export class Practice00Component {
  title = "Programming"
  courses;
  isSelected: boolean = false;
  message:string="Toto, I've a feeling we're not in Kansas anymore.";
  constructor(service: Practice00Service) {
    this.courses = service.getCourses();
  }
  onClick(){
    this.isSelected = !this.isSelected;
  }
}
