import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { RouterModule, Routes } from '@angular/router';

import { SharedModule } from 'app/@shared/shared.module';
import { ProductsTagsItemComponent } from './molecules/products-tags-item/products-tags-item.component';
import { ProductsItemComponent } from './molecules/products-item/products-item.component';

import { ProductsTagsComponent } from './organisms/products-tags/products-tags.component';
import { ProductsListComponent } from './organisms/products-list/products-list.component';
import { ProductsEvaluateComponent } from './molecules/products-evaluate/products-evaluate.component';
import {MarketingComponent} from '../../products-pages/pages/marketing/marketing.component';
import {ProductsPagesModule} from '../../products-pages/products-pages.module';
import {SalesComponent} from '../../products-pages/pages/sales/sales.component';
import {FinancialComponent} from '../../products-pages/pages/financial/financial.component';
import {OperationalComponent} from '../../products-pages/pages/operational/operational.component';



const routes: Routes = [
  {
    path: '',
    component: ProductsComponent,
    data: {
      title: 'Soluções de Gestão Empresarial 360º | sobTIC',
      description: 'Obtenha uma gestão eficiente e colaborativa que agregue valor ao negócio, por meio de entregas consistentes, ' +
        'relacionamentos de sucesso e clientes satisfeitos.'
    }
  },
  {
    path: 'gestao-de-marketing-com-mailchimp',
    component: MarketingComponent,
    data: {
      title: 'Gestão de Marketing com Mailchimp | sobTIC',
      description: 'Conquiste a audiência dos seus clientes por meio de uma comunicação estruturada e consistente. ' +
        'Atinja a audiência do seu cliente utilizando o Mailchimp.'
    }
  },
  {
    path: 'gestao-de-vendas-com-pipedrive',
    component: SalesComponent,
    data: {
      title: 'Gestão de Vendas com Pipedrive | sobTIC',
      description: '80% do sucesso dos negócios são vendas, atinja resultados incriveis. ' +
        'Conheça como podemos otimizar a performance da sua equipe de vendas utilizando o Pipedrive.'
    }
  },
  {
    path: 'gestao-financeira-com-contaazul',
    component: FinancialComponent,
    data: {
      title: 'Gestão de Financeira com ContaAzul | sobTIC',
      description: 'Obtenha sucesso na gestão financeira de seus negócios. Conheça como podemos atingir uma gestão ' +
        'financeira sustentável e desburocratizada utilizando o ContaAzul.'
    }
  },
  {
    path: 'gestao-operacional-com-pipefy',
    component: OperationalComponent,
    data: {
      title: 'Gestão de Operacional com Pipefy | sobTIC  ',
      description: 'Tenha o controle da operação dos seus processos de negócio de forma objetiva, eficiente e eficaz, ' +
        'conduza sua equipe ao sucesso utilizando o Pipefy.'
    }
  }
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ProductsPagesModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    ProductsComponent,
    ProductsListComponent,
    ProductsItemComponent,
    ProductsTagsComponent,
    ProductsTagsItemComponent,
    ProductsEvaluateComponent,
  ]
})
export class ProductsModule { }
