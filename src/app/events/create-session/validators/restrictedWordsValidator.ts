import {FormControl, ValidationErrors} from '@angular/forms';

export function restrictedWordsValidator(control: FormControl): ValidationErrors | null {
  return control.value.includes('foo') ?
    {restrictedWord: 'foo'} :
    null;
}
