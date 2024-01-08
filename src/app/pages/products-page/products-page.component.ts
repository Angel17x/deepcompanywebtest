import { Component } from '@angular/core';
import { OnInit, OnChanges, OnDestroy } from '@angular/core';
import { ProductsService } from 'src/app/services/products/products-service.service';
@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.css']
})
export class ProductsPageComponent {

  constructor( private service:ProductsService ) { }

  ngOnInit():void {
    this.callService();
  } 

  public callService(): void {
    this.service.getProductsDemo()
    .subscribe(data => {
      console.log(data);
    });
  }

}
