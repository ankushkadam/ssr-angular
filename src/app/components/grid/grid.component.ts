import { Component, input } from '@angular/core';
import { Product } from '../../model/product.model';

@Component({
  selector: 'app-grid',
  imports: [],
  templateUrl: './grid.component.html',
  styleUrl: './grid.component.scss'
})
export class GridComponent {
  productList = input<Product[]>();

}
