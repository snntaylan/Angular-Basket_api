import { Injectable } from '@angular/core';
import { Product } from '../product';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { map, catchError, tap } from "rxjs/operators";
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private http: Http) { }
  getProduct(): Observable<Product[]> {
    // Adım 7   
    return this.http.get("http://northwindapi.azurewebsites.net/api/products")
      .pipe(map(Response => Response.json()))
  }
}