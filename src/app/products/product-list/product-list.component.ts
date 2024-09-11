import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product.model';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, NgxPaginationModule, FormsModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  page: number = 1;
  itemsPerPage: number = 5;
  itemsPerPageOptions: number[] = [3, 5, 8, 15];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll(): void {
    this.productService.getAll().subscribe({
      next: products => {
        this.products = products;
        console.log("Products loaded successfully");
      },
      error: error => {
        console.error("Error loading products: ", error);
      }
    });
  }

  getCssClassesForProduct(product: Product): string {
    let classes = '';

    if (product.status == 'inactive') {
      classes += 'is-inactive';
    }

    if (product.expiry_date <= new Date().toISOString().substring(0, 10)) {
      classes += 'is-expired';
    }

    if (classes == 'is-inactiveis-expired') {
      classes = 'both-inactive-expired';
    }

    return classes;
  }
}
