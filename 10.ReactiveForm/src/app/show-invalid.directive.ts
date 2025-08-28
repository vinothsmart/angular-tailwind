import {
  Directive,
  ElementRef,
  HostListener,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { NgControl } from '@angular/forms';
import { Subscription } from 'rxjs';

@Directive({
  selector: '[appShowInvalid]',
})
export class ShowInvalidDirective implements OnInit, OnDestroy {
  private statusChangesSubscription!: Subscription;
  constructor(private el: ElementRef, private control: NgControl) {}

  ngOnInit() {
    this.statusChangesSubscription = this.control.statusChanges!.subscribe(
      () => {
        this.updateClass();
      }
    );
  }

  ngOnDestroy(): void {
    this.statusChangesSubscription.unsubscribe();
  }

  // Listen for the 'blur' event, which occurs when a user leaves the input field.
  @HostListener('blur')
  onBlur() {
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
