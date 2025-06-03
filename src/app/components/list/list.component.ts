import { Component, input, Input } from '@angular/core';
import { Product } from '../../model/product.model';

@Component({
  selector: 'app-list',
  imports: [],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {

  productList = input<Product[]>();

  headerList = ['Image', 'Title', 'Price', 'Rating'] 

}
