import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Practice00Service {

  getCourses(){
    return ["Java","Python","JavaScript","C#"];
  }
}
