import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Product } from '../model/product.model';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  http = inject(HttpClient)

  constructor() { }

  async getAllProducts(): Promise<Product[]> {
    const result = await lastValueFrom(this.http.get('https://fakestoreapi.com/products'));
    return result as Product[];
  } 

  async getProductById(id: string): Promise<Product> {
    const result = await lastValueFrom(this.http.get(`https://fakestoreapi.com/products/${id}`));
    return result as Product;
  }
}
