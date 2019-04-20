import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import { ProductService } from "./service/product.service";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers: [ProductService]
})
export class ProductComponent implements OnInit {
  products: Product[];
  addedProduct: string;
  constructor(private productService: ProductService) { }
  ngOnInit() {
    this.getProduct();
  }
  getProduct() {
    this.productService.getProduct().subscribe(response => {
      this.products = response
    })
  }
  addToCard(product: Product) {
    this.addedProduct = product.productName
  }
}