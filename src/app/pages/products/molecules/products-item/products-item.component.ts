import { Component, Input, } from '@angular/core';

@Component({
  selector: 'app-products-item',
  templateUrl: './products-item.component.html',
  styleUrls: ['./products-item.component.scss']
})
export class ProductsItemComponent {
  @Input () title: string;
  @Input () subtitle: string;
  @Input () text: string;
  @Input () logo: string;
}
