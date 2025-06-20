import { NgClass } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgxPaginationModule } from 'ngx-pagination';
import { Subscription } from 'rxjs';
import { carasouel } from 'src/app/modules/interfaces/carasouels.interface';
import { product } from 'src/app/modules/interfaces/product.interface';
import { CarasouelsService } from 'src/app/modules/services/carasouels.service';
import { DataService } from 'src/app/modules/services/data.service';
import { ProductShapeComponent } from 'src/app/shared/components/product-shape/product-shape.component';

@Component({
  selector: 'app-products-page1',
  standalone: true,
  imports: [NgClass, NgxPaginationModule, ProductShapeComponent],
  templateUrl: './products-page1.component.html',
  styleUrl: './products-page1.component.scss'
})
export class ProductsPage1Component implements OnInit, OnDestroy {

  paginationSize: number = 12;
  paginationCurrentPage: number = 1;
  products: product[] = []
  Carasouels: carasouel[] = []
  Subscriptions: Subscription[] = [];

  constructor(private dataServ: DataService, private dataCarasouel: CarasouelsService) { }

  ngOnInit(): void {
    this.getData();
    this.getCarasouels()
  }

  getData() {
    this.products = []
    this.Subscriptions.push(
      this.dataServ.getProducts("ring").subscribe({
        next: data => {
          this.products = data;
        },
        complete: () => this.products.reverse()
      })
    )
  }
  getCarasouels() {
    this.Carasouels = []
    this.Subscriptions.push(
      this.dataCarasouel.getCarasouels().subscribe(data => {
        for (const key in data) {
          this.Carasouels.push(data[key])
        }
      })
    )
  }


  ngOnDestroy() {
    for (const item of this.Subscriptions) {
      item.unsubscribe()
    }
  }
}
