import { customOptions } from '../../shared/helpers/carasouel';
import { Subscription } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { product } from 'src/app/modules/interfaces/product.interface';
import { DataService } from 'src/app/modules/services/data.service';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { NgClass, ViewportScroller } from '@angular/common';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { HomeMsgService } from 'src/app/modules/services/home-msg.service';
import { ToastrService } from 'ngx-toastr';
import { ProductsCarouselComponent } from 'src/app/shared/components/products-carousel/products-carousel.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CarouselModule, NgClass,ProductsCarouselComponent],
})
export class HomeComponent implements OnInit, OnDestroy {

  products1_In_Home: product[] = []
  products2_In_Home: product[] = []
  Subscriptions: Subscription[] = [];
  customOptions: OwlOptions = customOptions;
  MessageForm = this.fromBuilder.group({
    id: [new Date().getTime()],
    name: ["", Validators.required],
    email: ["", Validators.required],
    phone: ["", Validators.required],
    msg: ["", Validators.required],
  });
  msgSent: string = ""

  constructor(private dataServ: DataService, private scoller: ViewportScroller, private toastr: ToastrService,
    private fromBuilder: FormBuilder, private userHomeMsgServ: HomeMsgService) { }

  ngOnInit(): void {
    this.getData()
  }

  getData() {
    this.products1_In_Home = []
    this.products2_In_Home = []
    this.Subscriptions.push(
      this.dataServ.getProducts("ring").subscribe(data => {
        for (const key in data) {
          if (data[key].showOnHome == "true")
            this.products1_In_Home.push(data[key])
        }
      })
    )
    this.Subscriptions.push(
      this.dataServ.getProducts("rosary").subscribe(data => {
        for (const key in data) {
          if (data[key].showOnHome == "true")
            this.products2_In_Home.push(data[key])
        }
      })
    )
  }

  sendUserMssage() {
    if (this.MessageForm.valid)
      this.Subscriptions.push(
        this.userHomeMsgServ.sendUserMssage(this.MessageForm.value).subscribe((resolve) => {
          this.toastr.success("تم ارسال الرسالة بنجاح");
          this.msgSent = "تم ارسال الرسالة بنجاح"
        }, (reject) => {
          this.toastr.error("لم يتم ارسال الرسالة")
          this.msgSent = "لم يتم ارسال الرسالة"
        }))
    else
      this.toastr.error("يرجي ملئ بيانات بشكل كامل")
  }

  scrollTo() {
    this.scoller.scrollToAnchor("pro")
  }

  ngOnDestroy() {
    for (const item of this.Subscriptions) {
      item.unsubscribe()
    }
  }
}
