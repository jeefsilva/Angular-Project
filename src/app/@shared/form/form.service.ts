import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ErrorHandler, Injectable } from '@angular/core';
import { Observable } from 'rxjs/index';
import { catchError } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { Contact } from './contact.model';

@Injectable()
export class FormService {

  constructor(private readonly http: HttpClient, private readonly errorHandler: ErrorHandler) {
  }

  save(contact: Contact, formID: string): Observable<Contact> {
    contact.formID = formID;

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };

    return this.http.post<Contact>(`${environment.endpoint}/form`, JSON.stringify(contact), httpOptions)
      .pipe(catchError(err => {
        this.errorHandler.handleError(err);
        throw err;
      }));
  }
}
