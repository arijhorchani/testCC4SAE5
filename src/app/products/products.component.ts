import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.products = this.productService.getAvailableProducts();
  }

  likeProduct(product: Product) {
    const userId = 123; // Exemple d'ID utilisateur
    if (!product.likes.includes(userId)) {
      product.likes.push(userId);
    }
  }
}
