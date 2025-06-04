import { Component, input } from '@angular/core';
import { Product } from '../../model/product.model';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-grid',
  imports: [RouterLink],
  templateUrl: './grid.component.html',
  styleUrl: './grid.component.scss'
})
export class GridComponent {
  productList = input<Product[]>();

}
