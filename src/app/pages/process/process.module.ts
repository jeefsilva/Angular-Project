import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProcessComponent } from './process.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'app/@shared/shared.module';
import {ProcessCardComponent} from './molecules/process-card/process-card.component';
import {ProcessWorksComponent} from './organisms/process-works/process-works.component';

const routes: Routes = [
  {
    path: '',
    component: ProcessComponent,
    data: {
      title: 'Processo de Gestão Empresarial 360º | sobTIC',
      description: 'Por meio do processo de gestão empresarial 360º, mapeamos os processos de negócio, ' +
        'modelamos cenários para integrar pessoas a ferramentas, viabilizando um ciclo de melhoria contínua.'
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
    ProcessComponent,
    ProcessCardComponent,
    ProcessWorksComponent
  ]
})
export class ProcessModule { }
