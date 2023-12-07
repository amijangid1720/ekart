import { Component, EventEmitter, Input } from '@angular/core';
import { Product } from 'src/app/Models/Product';
import { ProductListComponent } from '../product-list/product-list.component';

@Component({
  selector: 'product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent {
  product: Product;

  @Input()
  selectedProductComponent: ProductListComponent = undefined;
  

  // ngOnInit() runs after the properties has been initialized
  ngOnInit() {
    this.product = this.selectedProductComponent.selectedProduct;
  }
  

}
