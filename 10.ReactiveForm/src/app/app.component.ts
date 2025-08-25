import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {
  FormArray,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import {
  ageValidator,
  customRequiredValidator,
  emailValidator,
  phoneNumberValidator,
  zipCodeValidator,
} from './custom.validators';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ReactiveFormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  userForm!: FormGroup;

  constructor(private fb: FormBuilder) {
    this.userForm = this.fb.group({
      name: ['', customRequiredValidator],
      email: ['', [customRequiredValidator, emailValidator]],
      address: this.fb.group({
        street: ['', customRequiredValidator],
        city: ['', customRequiredValidator],
        zip: ['', [customRequiredValidator, zipCodeValidator]],
      }),
      age: ['', [customRequiredValidator, ageValidator]],
      phoneNumbers: this.fb.array([
        this.fb.control('', [customRequiredValidator, phoneNumberValidator]),
      ]),
    });
  }

  get phoneNumbers(): FormArray {
    return this.userForm.get('phoneNumbers') as FormArray;
  }

  addPhoneNumber() {
    this.phoneNumbers.push(
      this.fb.control('', [customRequiredValidator, phoneNumberValidator])
    );
  }

  removePhoneNumber(index: number) {
    this.phoneNumbers.removeAt(index);
  }

  submitForm() {
    if (this.userForm.valid) {
      console.log(this.userForm.value);
    }
  }
}
