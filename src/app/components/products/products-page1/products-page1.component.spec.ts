import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsPage1Component } from './products-page1.component';

describe('ProductsPage1Component', () => {
  let component: ProductsPage1Component;
  let fixture: ComponentFixture<ProductsPage1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductsPage1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductsPage1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
