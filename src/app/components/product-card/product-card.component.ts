import { Component, OnInit } from '@angular/core';
import { ProductService, Product } from '../../services/product.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-card',
  standalone:true,
  imports:[CommonModule],
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe({
      next: (response: Product[]) => {
        this.products = response;
      },
      error: (error: any) => {
        console.error('Something went wrong', error);
      }
    });
  }
}
