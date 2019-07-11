import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'app/@shared/shared.module';
import { ProductsPagesComponent } from './products-pages.component';
import { HeadComponent } from './organisms/head/head.component';
import { ProductsBodyComponent } from './organisms/products-body/products-body.component';
import { MarketingComponent } from './pages/marketing/marketing.component';
import { MappingComponent } from './organisms/mapping/mapping.component';
import { HttpClientModule } from '@angular/common/http';
import { ModelingComponent } from './organisms/modeling/modeling.component';
import { IntegrationComponent } from './organisms/integration/integration.component';
import { ImprovementComponent } from './organisms/improvement/improvement.component';
import { SalesComponent } from './pages/sales/sales.component';
import { FinancialComponent } from './pages/financial/financial.component';
import { OperationalComponent } from './pages/operational/operational.component';


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    HttpClientModule,
  ],
  declarations: [
    ProductsPagesComponent,
    MappingComponent,
    ModelingComponent,
    IntegrationComponent,
    ImprovementComponent,
    MarketingComponent,
    SalesComponent,
    FinancialComponent,
    OperationalComponent,
    HeadComponent,
    ProductsBodyComponent,
  ]
})
export class ProductsPagesModule {
}
