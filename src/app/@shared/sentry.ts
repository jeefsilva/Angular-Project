import { ErrorHandler, Injectable } from '@angular/core';
import * as Sentry from '@sentry/browser';
import { environment } from '../../environments/environment';


@Injectable()
export class SentryErrorHandler implements ErrorHandler {
  constructor() {
    Sentry.init({dsn: environment.sentryDsn});
  }

  handleError(error) {
    Sentry.captureException(error.originalError || error);
    throw error;
  }
}
