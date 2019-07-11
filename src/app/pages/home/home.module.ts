import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule, Routes } from '@angular/router';
import { CompromiseComponent } from './organims/compromise/compromise.component';
import { HeadComponent } from './organims/head/head.component';
import { SharedModule } from 'app/@shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    HomeComponent,
    CompromiseComponent,
    HeadComponent
  ]
})
export class HomeModule {
}
