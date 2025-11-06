import { AbstractControl, AsyncValidatorFn } from "@angular/forms";
import { CvService } from "../cv/services/cv.service";
import { catchError, map, of } from "rxjs";

export function uniqueCinValidator(cvService: CvService): AsyncValidatorFn {
  return (control: AbstractControl) => {
    const cin = control.value;
    if (cin) {
      return cvService.selectByProperty("cin", cin).pipe(
        map((cvs) => (cvs.length ? { uniqueCin: `Le cin existe déjà` } : null)),
        catchError(() => of(null))
      );
    }
    return of(null);
  };
}
