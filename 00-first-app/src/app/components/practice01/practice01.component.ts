import { Component,Input } from '@angular/core';

@Component({
  selector: 'favourite',
  templateUrl: './practice01.component.html',
  styleUrls: ['./practice01.component.css']
})
export class Practice01Component {
  title = "Programming"
  @Input() isSelected: boolean = false;
  onClick(){
    this.isSelected = !this.isSelected;
  }
}
