import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customCase'
})
export class CustomCasePipe implements PipeTransform {
  transform(value: string): any {
    if (!value) return null;
   
    let words = value.split(' ');
    for (let i = 0; i < words.length; i++) {
      if (i>0 && this.isPreposition(words[i])){
        words[i] = words[i].toLowerCase();
      }else{
        words[i] = this.toTitleCase(words[i]);
      }
    }
    return words.join(' ');
  }
  private isPreposition(value:string):boolean{
    let prepositions = ["of", "and"];
    return prepositions.includes(value.toLowerCase());
  }
  private toTitleCase(value:string):string{
    return value.substring(0,1).toUpperCase()+value.substring(1).toLowerCase();
  }

}
