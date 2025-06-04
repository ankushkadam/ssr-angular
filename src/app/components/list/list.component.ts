import { Component, input, Input } from '@angular/core';
import { Product } from '../../model/product.model';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-list',
  imports: [RouterLink],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {

  productList = input<Product[]>();

  headerList = ['Image', 'Title', 'Price', 'Rating'] 

}
