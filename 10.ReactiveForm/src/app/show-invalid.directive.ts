import { Directive, ElementRef, HostListener } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[appShowInvalid]',
})
export class ShowInvalidDirective {
  constructor(private el: ElementRef, private control: NgControl) {}

  // @HostListener('blur')
  // onBlur() {
  //   if (this.control.invalid) {
  //     this.el.nativeElement.classList.add('is-invalid');
  //   } else {
  //     this.el.nativeElement.classList.remove('is-invalid');
  //   }
  // }

  // // we can reuse this directive for other form controls
  // @HostListener('input')
  // onInput() {
  //   if (this.control.invalid) {
  //     this.el.nativeElement.classList.add('is-invalid');
  //   } else {
  //     this.el.nativeElement.classList.remove('is-invalid');
  //   }
  // }

  ngOnInit() {
    // Check initial state on component load, in case a value was pre-filled and is invalid.
    this.updateClass();
  }

  // Listen for the 'blur' event, which occurs when a user leaves the input field.
  @HostListener('blur')
  onBlur() {
    this.updateClass();
  }

  // Listen for the 'input' event, which fires on every keystroke.
  @HostListener('input')
  onInput() {
    this.updateClass();
  }

  private updateClass() {
    // Check if the control is invalid AND has been interacted with (dirty or touched).
    const isInvalid =
      this.control.invalid && (this.control.dirty || this.control.touched);
    if (isInvalid) {
      this.el.nativeElement.classList.add('is-invalid');
    } else {
      this.el.nativeElement.classList.remove('is-invalid');
    }
  }
}
