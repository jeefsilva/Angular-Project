import {
  MdcAppBarModule,
  MdcButtonModule,
  MdcCardModule,
  MdcCheckboxModule,
  MdcDrawerModule,
  MdcFormFieldModule,
  MdcIconModule,
  MdcListModule,
  MdcRippleModule,
  MdcTabModule,
  MdcTextFieldModule,
  MdcTypographyModule
} from '@angular-mdc/web';
import { NgModule } from '@angular/core';


@NgModule({
  exports: [
    MdcListModule,
    MdcAppBarModule,
    MdcTabModule,
    MdcIconModule,
    MdcTextFieldModule,
    MdcButtonModule,
    MdcCardModule,
    MdcCheckboxModule,
    MdcFormFieldModule,
    MdcDrawerModule,
    MdcTypographyModule,
    MdcRippleModule
  ],
  declarations: [],
  providers: [],
})
export class MaterialModule {

}
