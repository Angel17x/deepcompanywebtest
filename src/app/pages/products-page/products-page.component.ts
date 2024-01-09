import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { ProductDemo } from 'src/app/models/product-demo.interface';
import { ProductsService } from 'src/app/services/products/products-service.service';
import translate from 'src/app/utils/translate';
import { Utils } from 'src/app/utils/utils';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.css']
})
export class ProductsPageComponent implements OnInit {

  products: ProductDemo[] = [];
  readonly title: string = 'Listado de productos';
  readonly subtitle: string = 'El precio y otros detalles pueden variar según el tamaño y el color del producto.';

  constructor( private service:ProductsService ) { }

  ngOnInit():void {
    this.callService();
  } 

  public callService(): void {
    this.service.getProductsDemo()
    .subscribe(data => this.formattedData(data.results));
  }

  private formattedData(listProducts:ProductDemo[] | null):void {
    this.products = listProducts?.map(
      (product:ProductDemo) => ({
        ...product,
        status: translate(product.status ?? ''),
        stock_quantity: Math.ceil(product.stock_quantity ?? 0)
      })) 
      ?? [];
  }
  
}
