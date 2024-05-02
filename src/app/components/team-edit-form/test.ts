import { ValidatorFn, AbstractControl, ValidationErrors, FormArray } from '@angular/forms';

export const duplicatePositionValidator: ValidatorFn = (formArray: AbstractControl): ValidationErrors | null => {
  if (!formArray || !(formArray instanceof FormArray)) {
    return null; // If formArray is not provided or is not a FormArray, return null (no validation error)
  }

  const positions = formArray.value.map((player: any) => player.position);

  const duplicatePositions = positions.filter((value: any, index: number, self: any[]) => {
    return self.indexOf(value) !== index; // Check for duplicate positions
  });

  if (duplicatePositions.length > 0) {
    return { 'duplicatePosition': true }; // Return error if duplicates found
  }

  return null; // No duplicates found, return null (no error)
};
