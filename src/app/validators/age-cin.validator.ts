import { AbstractControl, ValidationErrors } from "@angular/forms";

export function ageCinValdiator(
  form: AbstractControl
): null | ValidationErrors {
  const cin = +form.get("cin")?.value.substr(0, 2);
  const age = +form.get("age")?.value;
  if (cin && age) {
    if ((cin < 20 && age < 60) || (cin > 20 && age >= 60))
      return { ageCin: `Le numéro du cin ne correspond pas à l'age` };
  }
  return null;
}
