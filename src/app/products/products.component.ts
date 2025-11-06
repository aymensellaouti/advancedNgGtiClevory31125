import { Component, inject } from "@angular/core";
import {
  BehaviorSubject,
  Observable,
  concatMap,
  map,
  takeWhile,
  scan,
} from "rxjs";
import { Product } from "./dto/product.dto";
import { ProductService } from "./services/product.service";
import { Settings } from "./dto/product-settings.dto";
import { AsyncPipe } from "@angular/common";

@Component({
    selector: "app-products",
    templateUrl: "./products.component.html",
    styleUrls: ["./products.component.css"],
    imports: [AsyncPipe]
})
export class ProductsComponent {
  private productService = inject(ProductService);
  private setting: Settings = {
    limit: 12,
    skip: 0,
  };
  private settings$ = new BehaviorSubject<Settings>(this.setting);
  /* Todo : Faire le nécessaire pour créer le flux des produits à afficher */
  /* Tips : vous pouvez voir les différents imports non utilisés et vous en inspirer */
  products$: Observable<Product[]> = this.settings$.pipe(
    // {012}, {1212} {2412}
    concatMap((settingJdid) => this.productService.getProducts(settingJdid)),
    // APiResponse({012}), ....
    map((apiResponse) => apiResponse.products),
    // poroducts, ...
    takeWhile((products) => products.length > 0),
    scan((oldProducts, newProducts) => [...oldProducts, ...newProducts])
  );
  constructor() {}
  getMore() {
    this.setting.skip += this.setting.limit;
    this.settings$.next(this.setting);
  }
}
