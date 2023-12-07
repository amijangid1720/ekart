import { Component, Input } from '@angular/core';
import { Product } from 'src/app/Models/Product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
 @Input()
 product:Product=undefined;

 calculatedDiscount(product: Product) {
  return(((product.price-product.discountPrice)/product.price)*100).toFixed(0);
  }
}
