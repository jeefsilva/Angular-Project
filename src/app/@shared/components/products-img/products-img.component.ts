import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-products-img',
  templateUrl: './products-img.component.html',
  styleUrls: ['./products-img.component.scss']
})
export class ProductsImgComponent {

  @Input () imgSource: string;

}
