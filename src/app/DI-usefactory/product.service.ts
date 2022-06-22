import { Injectable } from '@angular/core';
import { LoggerService } from '../DI-usefactory/logger.service';
import { Product } from '../DI-usefactory/product';

@Injectable()
export class ProductService {
  constructor(private loggerservice: LoggerService) {}
  public getProducts() {
    this.loggerservice.log('Get Products');
    let products: Product[];
    products = [
      new Product(1, 'Memory Card', 500),
      new Product(2, 'Pen Drive', 750),
      new Product(3, 'Power Bank', 100),
      new Product(4, 'Laptop', 10000),
      new Product(5, 'Desktop', 100),
    ];
    return products;
  }
}
