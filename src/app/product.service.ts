import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IProduct } from './product';
import { Observable } from 'rxjs';
import * as angular from "angular";

@Injectable()
export class ProductService {
  
  private _url: string = "/assets/data/product.json"
  constructor(private http: HttpClient) { 
  }

  getProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this._url);
  }

  getProduct(givenId) {
    let arrayOfProducts = this.http.get<IProduct[]>(this._url);
    console.log(arrayOfProducts)
    return "arrayOfProducts.find(object => object.id == givenId)"
  }

  getProductsByCategory(category): Observable {
    let url = `${this._url}?${category}`
    return this.http.jsonp(url, 'callback').pipe(
      catchError(this.handleError())
    )
  с}
}
