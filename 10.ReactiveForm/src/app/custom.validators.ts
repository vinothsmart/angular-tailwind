import { AbstractControl, ValidationErrors } from '@angular/forms';

export function zipCodeValidator(
  control: AbstractControl
): ValidationErrors | null {
  const value = control.value;
  const valid = /^[0-9]{6}$/.test(value);
  return valid ? null : { invalidZipCode: true };
}

export function phoneNumberValidator(
  control: AbstractControl
): ValidationErrors | null {
  const value = control.value;
  const valid = /^[0-9]{10}$/.test(value);
  return valid ? null : { invalidPhoneNumber: true };
}

export function emailValidator(
  control: AbstractControl
): ValidationErrors | null {
  const value = control.value;
  const valid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value);
  return valid ? null : { invalidEmail: true };
}

export function ageValidator(
  control: AbstractControl
): ValidationErrors | null {
  const value = control.value;
  const valid = value >= 0;
  return valid ? null : { invalidAge: true };
}

export function customRequiredValidator(
  control: AbstractControl
): ValidationErrors | null {
  const value = control.value;
  const valid = value && value.trim().length > 0;
  return valid ? null : { customRequired: true };
}
