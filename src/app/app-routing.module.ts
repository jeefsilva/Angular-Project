import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages/pages.component';

const routes: Routes = [
  {
    path: 'contato',
    loadChildren: './forms/contact/contact.module#ContactModule'
  },
  {
    path: '',
    component: PagesComponent,
    children: [
      {path: '', loadChildren: './pages/home/home.module#HomeModule'},
      {path: 'processo', loadChildren: './pages/process/process.module#ProcessModule'},
      {path: 'parceiros', loadChildren: './pages/partners/partners.module#PartnersModule'},
      {path: 'solucoes', loadChildren: './pages/products/products.module#ProductsModule'},
      {path: 'clientes', loadChildren: './pages/clients/clients.module#ClientsModule'}
    ]
  },
  {
    path: '**',
    redirectTo: '/'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
