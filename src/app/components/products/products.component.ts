import { Component, inject, OnInit } from '@angular/core';
import { ListComponent } from '../list/list.component';
import { GridComponent } from '../grid/grid.component';
import { ProductService } from '../../services/product.service';
import { Product } from '../../model/product.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  imports: [ListComponent, GridComponent, CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent implements OnInit {
  selectedView: 'Grid' | 'List' = 'List';

  private productService = inject(ProductService)
  
  productList: Product[] = []

  ngOnInit(){
    this.getProductList();
  }

  async getProductList(): Promise<void> {
    this.productList = await this.productService.getAllProducts();
    console.log('productlist', this.productList);
  }

  viewHandler(event: Event): void{
    console.log('evvent', event);
    this.selectedView = this.selectedView === 'List' ? 'Grid' : 'List';
  }
}
