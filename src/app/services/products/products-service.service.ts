import { Injectable } from '@angular/core';
import { environment } from "src/environments/environment";
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { CurrencyPipe, DatePipe } from '@angular/common';
import { GenericHttp } from 'src/app/models/generic-http.interface';
import { ProductDemo } from 'src/app/models/product-demo.interface';
import { Observable, catchError, map, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ProductsService {

  private url: string = environment.url;

  constructor(private http: HttpClient, private datePipe: DatePipe, private currencyPipe: CurrencyPipe,) { }

  getProductsDemo(): Observable<GenericHttp<ProductDemo[]>> {
    const url = `${this.url}/product-demo?page=1`
    return this.http
    .get(url)
    .pipe(
      map((response: any) => {
        const successfulHttp: GenericHttp<ProductDemo[]> = {
          results: response.results,
          pages: response.pages,
          records: response.records,
          current: response.current,
          filter: response.filter,
          error: null
        };
        return successfulHttp;
      }),
      catchError((error: HttpErrorResponse) => {
        console.error(`Error al recuperar los productos: ${error}'`);

        const emptyHttp: GenericHttp<ProductDemo[]> = {
          results: null,
          pages: null,
          records: null,
          current: null,
          filter: null,
          error: error.message ?? 'Error al recuperar los productos'
        };

        return of(emptyHttp);
      }),

    )
  }
}
