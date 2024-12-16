import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private products: Product[] = [];

  addProduct(product: Product) {
    this.products.push(product);
  }

  getAvailableProducts(): Product[] {
    return this.products.filter((product) => product.available);
  }
}
