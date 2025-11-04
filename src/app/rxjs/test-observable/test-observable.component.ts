import { Component, inject, OnDestroy } from "@angular/core";
import { Observable, Subscription, filter, map } from "rxjs";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-test-observable",
  templateUrl: "./test-observable.component.html",
  styleUrls: ["./test-observable.component.css"],
})
export class TestObservableComponent {
  firstObservable$: Observable<number>;
  toastr = inject(ToastrService);
  //counter = 5;
  constructor(private toaster: ToastrService) {
    this.firstObservable$ = new Observable((observer) => {
      let i = 5;
      const intervalIndex = setInterval(() => {
        if (!i) {
          observer.complete();
          clearInterval(intervalIndex);
        } else {
          observer.next(i--);
        }
      }, 1000);
    });

    // Fama chkoun interested bech i9ayed
    this.firstObservable$.subscribe({
      next: (dataJDida) => console.log(dataJDida * 3),
    }); // Fama chkoun interested bech i9ayed
    // this.firstObservable$.subscribe({
    //   next: (dataJDida) => (this.counter = dataJDida),
    // });
    // Fama chkoun akher interested bech i9ayed

    setTimeout(() => {
      this.firstObservable$.subscribe({
        next: (value) => {
          value = value * 2;
          this.toaster.info("" + value);
        },
        complete: () => this.toaster.error("BOOOOM !!!!!"),
      });
    }, 3000);
  }
}
