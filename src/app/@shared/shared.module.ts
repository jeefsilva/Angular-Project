import { MdcRouterModule } from '@angular-mdc/web';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ContactButtonComponent } from './components/contact-button/contact-button.component';
import { LogoComponent } from './components/logo/logo.component';
import { PrimaryButtonComponent } from './components/primary-button/primary-button.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormTextComponent } from './components/form-text/form-text.component';
import { HeadItemComponent } from './components/head-item/head-item.component';
import { ItemComponent } from './components/item/item.component';
import { ProductsImgComponent } from './components/products-img/products-img.component';
import { ProductsTextComponent } from './components/products-text/products-text.component';
import { NavComponent } from './components/toolbar/molecules/nav/nav.component';
import { SearchComponent } from './components/toolbar/molecules/search/search.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MaterialModule } from './material.module';
import { ProductsPromoTextComponent } from './components/products-promo-text/products-promo-text.component';
import { HeadSharedComponent } from './components/head-shared/head-shared.component';

const modules: any[] = [
  CommonModule,
  RouterModule,
  MaterialModule
];

const components: any[] = [
  NavComponent,
  ToolbarComponent,
  ItemComponent,
  HeadItemComponent,
  PrimaryButtonComponent,
  ContactButtonComponent,
  ProductsImgComponent,
  ProductsTextComponent,
  ProductsPromoTextComponent,
  FormTextComponent,
  FooterComponent,
  SearchComponent,
  HeadSharedComponent,
  LogoComponent
];

@NgModule({
  imports: [
    MdcRouterModule,
    ...modules
  ],
  exports: [
    ...modules,
    ...components
  ],
  declarations: [
    ...components
  ]
})
export class SharedModule {
}
