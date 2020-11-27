import { Directive, Input, OnChanges, SimpleChanges } from '@angular/core';
import { AbstractControl, AsyncValidator, NG_ASYNC_VALIDATORS, ValidationErrors } from '@angular/forms';
import { from, Observable, of } from 'rxjs';
import { catchError, filter, map, tap } from 'rxjs/operators';
import { InvalidFields } from './../../core/model/error-Information.model';

@Directive({
  selector: '[appValidationBackend]',
  providers: [{provide: NG_ASYNC_VALIDATORS, useExisting: ValidationBackendDirective, multi:
    true}]
})
export class ValidationBackendDirective implements AsyncValidator {

  @Input() appValidationBackend: InvalidFields[];
  @Input() fieldName: string;

  constructor() { }

  validate(control: AbstractControl): Observable<ValidationErrors|null> {

    return from(this.appValidationBackend).pipe(
      filter(invalidFields => invalidFields.field === this.fieldName),
      map( invalidFields => {
        return { [invalidFields.field]: true };
       }),
      catchError(() => of(null))
      );
    }
}
