import {
  AbstractControl,
  FormControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
} from "@angular/forms";

export class FormValidators {

  static email(control: FormControl): ValidatorFn {
    let retValue = null;
    try {
      let value: string = control.value ? control.value.toString() : null;

      if (value &&value.match("^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,4}$") == null) {
        retValue = {
          email: {
            value: value,
          } as ValidationErrors,
        };
      }
    } catch (err) {
      throw err;
    }
    return retValue;
  }

  static password(control: FormControl): ValidatorFn {
    let retValue = null;
    try {
      let value: string = control.value ? control.value.toString() : null;

      if (value &&value.match(/^(?=.*\d)(?=.*[!@#$%^&*()])(?=.*[A-Z])(?=.*[a-z]).{4,16}$/) == null) {
        retValue = {
          password: {
            value: value,
          } as ValidationErrors,
        };
      }
    } catch (error) {
      throw error;
    }
    return retValue;
  }

  static mobile(control: FormControl): ValidatorFn {
    let retValue = null;
    try {
      let value: string = control.value ? control.value.toString() : null;
      if (value && value.match(/^[6-9]\d{9}$/) == null) {
        retValue = {
          mobile: {
            value: value,
          } as ValidationErrors,
        };
      }
    } catch (err) {
      throw err;
    }
    return retValue;
  }

  static pincode(control: FormControl): ValidatorFn {
    let retValue = null;
    try {
      let value: string = control.value ? control.value.toString() : null;
      if (value && value.match(/^[1-9]\d{5}$/) == null) {
        retValue = {
          pincode: {
            value: value,
          } as ValidationErrors,
        };
      }
    } catch (err) {
      throw err;
    }
    return retValue;
  }

  static onlyNumber(control: FormControl): ValidatorFn {
    let retValue = null;
    try {
      let value: string = control.value ? control.value.toString() : null;

      if (value && value.match(/(^[0-9]+$)/g) == null) {
        retValue = {
          onlyNumber: {
            value: value,
          } as ValidationErrors,
        };
      }
    } catch (err) {
      throw err;
    }
    return retValue;
  }

  static onlyAlpha(control: FormControl): ValidatorFn {
    let retValue = null;
    try {
      let value: string = control.value;

      if (value && value.match(/(^[A-Za-z]+$)/g) == null) {
        retValue = {
          onlyAlpha: {
            value: value,
          } as ValidationErrors,
        };
      }
    } catch (err) {
      throw err;
    }
    return retValue;
  }

  static userName(control: FormControl): ValidatorFn {
    let retValue = null;
    try {
      let value: string = control.value;

      if (value && value.match(/^[a-zA-Z]+(\s[a-zA-Z]+)?$/) == null) {
        retValue = {
          userName: {
            value: value,
          } as ValidationErrors,
        };
      }
    } catch (err) {
      throw err;
    }
    return retValue;
  }

}
