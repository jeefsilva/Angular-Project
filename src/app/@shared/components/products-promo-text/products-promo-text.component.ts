import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-products-promo-text',
  templateUrl: './products-promo-text.component.html',
  styleUrls: ['./products-promo-text.component.scss']
})
export class ProductsPromoTextComponent {
  @Input () text: string;
}
