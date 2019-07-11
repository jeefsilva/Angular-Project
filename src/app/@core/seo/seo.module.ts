import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SeoService } from './seo.service';

@NgModule({
  imports: [BrowserModule],
  exports: [],
  declarations: [],
  providers: [SeoService],
})
export class SeoModule {
  constructor(seoService: SeoService) {}
}
