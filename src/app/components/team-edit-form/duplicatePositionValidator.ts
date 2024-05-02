import { AbstractControl, ValidatorFn } from '@angular/forms';

// Custom validator to check for duplicate player_id
export function duplicatePositionValidator(existingPositions: number[]): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    if (control.value && existingPositions.includes(control.value)) {
      return { 'duplicatePlayerId': { value: control.value } };
    }
    return null;
  };

}