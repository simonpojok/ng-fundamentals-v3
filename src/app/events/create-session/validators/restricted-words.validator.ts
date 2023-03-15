import {FormControl, ValidationErrors} from '@angular/forms';

export function restrictedWordsValidator(words: string[] | null) {
  return (control: FormControl): ValidationErrors | null => {
    if (!words) {
      return null;
    }

    const inValidWords: string = words
      .map(word => control.value.includes(word) ? word : null)
      .filter(word => word !== null)
      .join(', ');

    return control.value.includes('foo') ?
      {restrictedWord: inValidWords} :
      null;
  };
}
