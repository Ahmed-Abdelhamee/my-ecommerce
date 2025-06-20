import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsPage2Component } from './products-page2.component';

describe('ProductsPage2Component', () => {
  let component: ProductsPage2Component;
  let fixture: ComponentFixture<ProductsPage2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductsPage2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductsPage2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
