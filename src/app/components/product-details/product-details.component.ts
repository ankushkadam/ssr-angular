import { Component, inject, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { Product } from '../../model/product.model';

@Component({
  selector: 'app-product-details',
  imports: [],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent implements OnInit {
  private productService = inject(ProductService);
  private activateRoute = inject(ActivatedRoute);

  product!: Product;

  ngOnInit(): void {
      this.activateRoute.params.subscribe(params => {
        const id = params['id'];
        this.getProductDetails(id);
      })
  }

  async getProductDetails(id: string): Promise<void> {
    this.product = await this.productService.getProductById(id);
  }
}
