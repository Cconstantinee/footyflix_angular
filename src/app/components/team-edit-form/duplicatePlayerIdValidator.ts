import { AbstractControl, ValidatorFn } from '@angular/forms';

// Custom validator to check for duplicate player_id
export function duplicatePlayerIdValidator(existingPlayerIds: number[]): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    if (control.value && existingPlayerIds.includes(control.value)) {
      return { 'duplicatePlayerId': { value: control.value } };
    }
    return null;
  };
  
}
