import { CommonModule } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { Product } from '../../DI-usefactory/product';
import { ProductService } from '../../DI-usefactory/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  standalone:true,
  imports:[CommonModule]
})
export class ProductsComponent implements OnInit {
  products: Product[];
  constructor(@Inject('USE_FAKE')private usefake ,private productService: ProductService) { }
  ngOnInit() {
    console.log(this.usefake)
    this.getProducts();
  }
  getProducts() {
     
    this.products = this.productService.getProducts();
  }
}