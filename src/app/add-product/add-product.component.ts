import { Component } from '@angular/core';
import { Product } from '../models/product.model';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
})
export class AddProductComponent {
  product: Product = new Product();

  constructor(private productService: ProductService) {}

  onAddProduct() {
    this.product.available = true;
    this.product.likes = [];
    this.productService.addProduct(this.product);
    alert('Produit ajouté avec succès');
  }
}
