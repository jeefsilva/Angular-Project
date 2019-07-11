import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'app/@shared/shared.module';
import { ContactComponent } from './contact.component';
import { FormService } from 'app/@shared/form/form.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


const routes: Routes = [
  {path: '', component: ContactComponent}
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    ContactComponent
  ],
  providers: [
    FormService
  ]
})
export class ContactModule {
}
