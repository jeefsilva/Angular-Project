import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PartnersComponent } from './partners.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'app/@shared/shared.module';
import { PartnersCardComponent } from './molecules/partners-card/partners-card.component';
import { PartnersListComponent } from './organisms/partners-list/partners-list.component';
import { BadgesComponent } from './organisms/badges/badges.component';

const routes: Routes = [
  {
    path: '',
    component: PartnersComponent,
    data: {
      title: 'Parcerias e Ferramentas de Sucesso | sobTIC',
      description: 'Acreditamos no valor gerado pelas parcerias, por meio do comprometimento e lealdade, ' +
        'construímos um relacionamento de sucesso.'
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
    PartnersComponent,
    PartnersCardComponent,
    PartnersListComponent,
    BadgesComponent,
  ]
})
export class PartnersModule { }
