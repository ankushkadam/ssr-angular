import { afterNextRender, afterRender, Component, inject, OnInit } from '@angular/core';
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
  
  productList: Product[] = [];

  constructor(){
    /**
     * afterNextRender
      What it Does:
      Registers a callback that executes only once, after the next render cycle (after the next change detection and DOM update).

      Use Cases:
      One-time DOM manipulations, such as initializing third-party libraries.

      Setting up observers (e.g., ResizeObserver, IntersectionObserver) that require the DOM to be present.
      Performing one-time setup after the initial render
     */

    afterNextRender(() => {
      navigator.geolocation.getCurrentPosition(position => {
      console.log('constructor co-ordinates', position.coords.latitude, position.coords.longitude);
    });

    console.log('after next render');
    })


    /**
     * afterRender
        What it Does:
        Registers a callback that executes after every render cycle (i.e., after each change detection and DOM update).

        Use Cases:
        1. Reacting to frequent DOM changes.
        2. Adjusting element sizes or positions dynamically as content updates.
        3. Synchronizing state with the DOM after every render.

        Performance Note:
        Since it runs after every render, use it judiciously to avoid performance issues
     */

    afterRender(() => {
      console.log('afterRender');
    })
  }

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
