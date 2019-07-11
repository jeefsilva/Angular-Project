import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { SharedModule } from 'app/@shared/shared.module';
import { ClientsComponent } from './clients.component';
import { ClientComponent } from './molecules/client/client.component';
import { TestimonyComponent } from './organisms/testimony/testimony.component';

const routes: Routes = [
  {
    path: '',
    component: ClientsComponent,
    data: {
      title: 'Clientes de Gestão Empresarial 360º | sobTIC',
      description: 'Acreditamos no potencial da Gestão Empresarial 360º focada no relacionamento contínuo, ' +
        'entendendo que valor é resultado de uma boa entrega.'
    }
  }
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    ClientsComponent,
    TestimonyComponent,
    ClientComponent
  ]
})
export class ClientsModule { }
