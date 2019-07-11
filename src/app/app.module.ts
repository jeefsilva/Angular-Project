import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SeoModule } from './@core/seo/seo.module';
import { SentryErrorHandler } from './@shared/sentry';
import { SharedModule } from './@shared/shared.module';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { PagesComponent } from './pages/pages.component';

@NgModule({
  declarations: [
    AppComponent,
    PagesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    SeoModule
  ],
  providers: [{provide: ErrorHandler, useClass: SentryErrorHandler}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
