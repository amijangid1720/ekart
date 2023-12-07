import { Component, ViewChild } from '@angular/core';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css'],
})
export class ContainerComponent {

  addToCart: number = 0;
  @ViewChild('productListComponent',{static:true})
  //we have use this also @ViewChild('ProductListComponent')
  selectedProduct:ProductListComponent=undefined;
  searchText:string='';
  name = 'John Doe';
  product = {
    name: 'iPhoneX',
    price: 789,
    color: 'Black',
    discount: 8.5,
    inStock: 10,
    pImage: '../assets/iphone.png',
  };

  getDiscountedPrice() {
    return (
      (this.product.price - (this.product.price * this.product.discount) / 100).toFixed(2)
    );
  }
  onInputChanged(event: any) {
    this.name = event.target.value;
  }
  incrementCartValue() {
    if(this.addToCart < this.product.inStock)
    {
      this.addToCart++;
    }
  }
  decrementCartValue() {
   if(this.addToCart > 0)
   {
    this.addToCart--;
   }
  }
  onSearchInputChanged(value: string) {
    this.searchText=value;
    console.log(this.searchText);
    
  }
}
