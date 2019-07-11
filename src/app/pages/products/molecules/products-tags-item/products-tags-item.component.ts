import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-products-tags-item',
  templateUrl: './products-tags-item.component.html',
  styleUrls: ['./products-tags-item.component.scss']
})
export class ProductsTagsItemComponent {

  @Input () title: string;
  @Input () text: string;
  @Input () icon: string;
}
