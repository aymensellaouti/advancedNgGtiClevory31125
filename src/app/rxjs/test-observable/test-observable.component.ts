import { Component, inject, OnDestroy } from "@angular/core";
import { Observable, Subscription, filter, map, take } from "rxjs";
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
      // n'implémenti fel logique de création du flux
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
      next: (dataJDida) => console.log(dataJDida),
    }); // Fama chkoun interested bech i9ayed
    // this.firstObservable$.subscribe({
    //   next: (dataJDida) => (this.counter = dataJDida),
    // });
    // Fama chkoun akher interested bech i9ayed

    // setTimeout(() => {
    this.firstObservable$
      .pipe(
        // 5 4 3 2 1
        map((value) => value * 3),
        // 15 12 9 6 3
        filter((val) => val % 2 == 0),
        //12 6
        take(2)
      )
      .subscribe({
        next: (value) => {
          this.toaster.info("" + value);
        },
        complete: () => this.toaster.error("BOOOOM !!!!!"),
      });
    // }, 3000);
  }
}
