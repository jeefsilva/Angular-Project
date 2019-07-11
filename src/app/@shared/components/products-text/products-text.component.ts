import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-products-text',
  templateUrl: './products-text.component.html',
  styleUrls: ['./products-text.component.scss']
})
export class ProductsTextComponent {

  @Input () title: string;
  @Input () text: string;

}
