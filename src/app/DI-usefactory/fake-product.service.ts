import { Injectable, Inject } from '@angular/core';
import { Product } from '../DI-usefactory/product';

@Injectable()
export class FakeProductService {
  constructor(@Inject('FUNC') private func) {}

  public getProducts() {
    let products: Product[];
    console.log(this.func());
    products = [
      new Product(1, 'Memory Card', 500),
      new Product(2, 'Pen Drive', 750),
      new Product(3, 'Power Bank', 100),
    ];
    return products;
  }
}
