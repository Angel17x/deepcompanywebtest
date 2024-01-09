import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductsPageComponent } from './products-page.component';
import { ProductsService } from 'src/app/services/products/products-service.service';
import { Observable, of } from 'rxjs';
import { ProductComponent } from 'src/app/components/product/product.component';

describe('ProductsPageComponent', () => {
  let component: ProductsPageComponent;
  let fixture: ComponentFixture<ProductsPageComponent>;
  let mockProductsService: { getProductsDemo: { and: { returnValue: (arg0: Observable<{ results: { id: number; title: string; status: string; stock_quantity: number; }[]; }>) => void; }; }; };
  let mockProducts;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [ ProductsPageComponent, ProductComponent ]
      // ...
    })
    .compileComponents();
    // Preparar los datos de prueba simulados
    mockProducts = [
      { id: 1, title: 'Product 1', status: 'available', stock_quantity: 10 },
      { id: 2, title: 'Product 2', status: 'unavailable', stock_quantity: 0 },
      // Añade más productos de prueba si es necesario
    ];

    // Crear un servicio simulado
    mockProductsService = jasmine.createSpyObj('ProductsService', ['getProductsDemo']);
    mockProductsService.getProductsDemo.and.returnValue(of({ results: mockProducts}));

    // Configurar el TestBed
    await TestBed.configureTestingModule({
      declarations: [ ProductsPageComponent ],
      providers: [
        { provide: ProductsService, useValue: mockProductsService }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call getProductsDemo on init', () => {
    expect(mockProductsService.getProductsDemo).toHaveBeenCalled();
  });

  it('should set products correctly from the service', () => {
    component.callService();
    expect(component.products.length).toBe(2);
    expect(component.products[0].title).toEqual('Product 1');
  });

  // Añade más pruebas según sea necesario
});