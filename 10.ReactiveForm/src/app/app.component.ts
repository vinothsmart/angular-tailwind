import { Component } from '@angular/core';
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
import { ShowInvalidDirective } from './show-invalid.directive';

interface User {
  name: string;
  email: string;
  address: {
    street: string;
    city: string;
    zip: string;
  };
  age: number;
  phoneNumbers: string[];
}

@Component({
  selector: 'app-root',
  imports: [ReactiveFormsModule, CommonModule, ShowInvalidDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  userForm!: FormGroup;
  users: User[] = [];
  editingIndex: number | null = null; // Track which user is being edited

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
      const formValue = this.userForm.value as User;

      if (this.editingIndex !== null) {
        // Update existing user
        this.users[this.editingIndex] = formValue;
      } else {
        // Add new user
        this.users.push(formValue);
      }

      this.resetForm();
    }
  }

  private resetForm() {
    this.userForm.reset();
    this.phoneNumbers.clear();
    this.phoneNumbers.push(
      this.fb.control('', [customRequiredValidator, phoneNumberValidator])
    );
    this.editingIndex = null;
  }

  editUser(user: User, index: number) {
    this.editingIndex = index;
    this.userForm.patchValue(user);
    this.phoneNumbers.clear();
    user.phoneNumbers.forEach((phone) => {
      this.phoneNumbers.push(
        this.fb.control(phone, [customRequiredValidator, phoneNumberValidator])
      );
    });
  }

  cancelEdit() {
    this.resetForm();
  }

  deleteUser(index: number) {
    this.users.splice(index, 1);
    // If we're editing the deleted user, reset the form
    if (this.editingIndex === index) {
      this.resetForm();
    } else if (this.editingIndex !== null && index < this.editingIndex) {
      // Adjust editing index if a user before the current edit was deleted
      this.editingIndex--;
    }
  }
}
