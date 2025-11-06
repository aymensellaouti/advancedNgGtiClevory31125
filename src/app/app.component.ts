import { Component, inject } from "@angular/core";
import {
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router,
  RouterOutlet,
} from "@angular/router";
import { NgxUiLoaderService, NgxUiLoaderModule } from "ngx-ui-loader";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { SomComponent } from "./signals/som/som.component";
import { TtcComponent } from "./signals/ttc/ttc.component";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  imports: [
    NavbarComponent,
    NgxUiLoaderModule,
    RouterOutlet,
    SomComponent,
    TtcComponent,
  ],
})
export class AppComponent {
  title = "Starting Advanced Topics";
  router = inject(Router);
  ngxService = inject(NgxUiLoaderService);
  constructor() {
    //   next: (event) => {
    //     if (event instanceof NavigationStart) {
    //       this.ngxService.start();
    //     } else if (
    //       event instanceof NavigationEnd ||
    //       event instanceof NavigationCancel ||
    //       event instanceof NavigationError
    //     ) {
    //       this.ngxService.stop();
    //     }
    //   },
    // });
  }
}
