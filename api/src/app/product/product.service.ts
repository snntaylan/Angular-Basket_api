import { Injectable, Inject } from '@angular/core';
import { Product } from '../product';
import { Http, Response } from '@angular/http';
import { Observable } from "rxjs";
import { map, catchError, tap } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: Http, @Inject('apiUrl') private apiUrl) { }

  getProducts(): Observable<Product[]> {
    return
    this.http.get(this.apiUrl + "/products")
      .pipe(map(Response => Response.json()))
  }
}
