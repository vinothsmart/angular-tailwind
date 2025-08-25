import { Directive, ElementRef, HostListener } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[appShowInvalid]',
})
export class ShowInvalidDirective {
  constructor(private el: ElementRef, private control: NgControl) {}

  @HostListener('blur')
  onBlur() {
    if (this.control.invalid) {
      this.el.nativeElement.classList.add('is-invalid');
    } else {
      this.el.nativeElement.classList.remove('is-invalid');
    }
  }

  // we can reuse this directive for other form controls
  @HostListener('input')
  onInput() {
    if (this.control.invalid) {
      this.el.nativeElement.classList.add('is-invalid');
    } else {
      this.el.nativeElement.classList.remove('is-invalid');
    }
  }
}
