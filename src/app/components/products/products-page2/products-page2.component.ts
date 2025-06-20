import { NgClass, NgFor } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';
import { Subscription } from 'rxjs';
import { carasouel } from 'src/app/modules/interfaces/carasouels.interface';
import { product } from 'src/app/modules/interfaces/product.interface';
import { ToNumberPipe } from 'src/app/modules/pipes/to-number.pipe';
import { CarasouelsService } from 'src/app/modules/services/carasouels.service';
import { DataService } from 'src/app/modules/services/data.service';

@Component({
  selector: 'app-products-page2',
  standalone: true,
  imports:[NgxPaginationModule,NgClass,ToNumberPipe,RouterLink],
  templateUrl: './products-page2.component.html',
  styleUrl: './products-page2.component.scss'
})
export class ProductsPage2Component implements OnInit, OnDestroy {


  paginationSize: number = 12;
  paginationCurrentPage: number = 1;
  products: product[] = []
  Carasouels: carasouel[] = []
  Subscriptions: Subscription[] = [];

  constructor(private dataServ: DataService, private dataCarasouel: CarasouelsService) { }

  ngOnInit(): void {
    this.getData()
    this.getCarasouels()
  }

  getData() {
    this.products = []
    this.Subscriptions.push(
      this.dataServ.getProducts("rosary").subscribe({
        next: data => {
          for (const key in data) {
            this.products.push(data[key])
          }
        },
        complete: ()=> this.products.reverse()
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
