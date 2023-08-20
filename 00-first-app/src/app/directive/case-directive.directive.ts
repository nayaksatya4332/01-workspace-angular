import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[CaseDirective]'
})
export class CaseDirectiveDirective {
  constructor(private ref: ElementRef) { }
  @Input('format') format: any;
  @HostListener('blur') public onBlur() {
    let value: string = this.ref.nativeElement.value;
    if (this.format === 'uppercase')
      this.ref.nativeElement.value = value.toUpperCase();
    if (this.format === 'lowercase')
      this.ref.nativeElement.value = value.toLowerCase();
  }

}
