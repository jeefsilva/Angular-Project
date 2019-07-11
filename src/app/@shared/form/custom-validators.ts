import {FormGroup, Validators} from "@angular/forms";
import {MdcTextField} from "@angular-mdc/web";

export class CustomValidators {
  static equalTextValidator(controlSourceName: string, controlToCompareName: string) {
    return (group: FormGroup) => {
      let controlSource = group.controls[controlSourceName],
        controlToCompare = group.controls[controlToCompareName];
      if (controlSource.value !== controlToCompare.value) {
        return controlToCompare.setErrors({notEqual: true});
      } else {
        if (controlToCompare.hasError('notEqual')) {
          delete controlToCompare.errors.notEqual;
        }
        return controlToCompare.setErrors(controlToCompare.errors);
      }
    }
  }

  static hasInequivalenceError(formGroup: FormGroup, input: MdcTextField, inputName: string): boolean {
    if (formGroup.controls[inputName].hasError('notEqual') && formGroup.controls[inputName].errors.notEqual == true) {
      input.setValid(false);
      return true;

    } else if (formGroup.controls[inputName].errors != null
      && Object.keys(formGroup.controls[inputName].errors).length > 0
      && formGroup.controls[inputName].dirty) {
      input.setValid(false);
      return false;

    } else {
      input.setValid(true);
      return false;
    }
  }

  static isValidEmail(formGroup: FormGroup, input: MdcTextField, inputName: string): boolean {
    if (!/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/.test(formGroup.controls[inputName].value)
      && formGroup.controls[inputName].dirty) {
      input.setValid(false);
      return false;

    } else {
      input.setValid(true);
      return true;
    }
  }
}
