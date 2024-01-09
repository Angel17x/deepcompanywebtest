import { Component, Input, OnInit } from '@angular/core';
import { ProductDemo } from 'src/app/models/product-demo.interface';
import { Utils } from 'src/app/utils/utils';

@Component({
  selector: 'products',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit{
  @Input() listProducts: ProductDemo[] = []; // Asegúrate de tener el tipo correcto para tus productos
  public readonly defaultImageUrl: string = 'assets/img/not-found-image.png'; // Ruta de la imagen predeterminada
  
  constructor() {}
  
  ngOnInit(): void {
      
  }

  public formattedAmount(amount:number, format:string):string {
    return Utils.formatAmount(amount, format)
  }
}
