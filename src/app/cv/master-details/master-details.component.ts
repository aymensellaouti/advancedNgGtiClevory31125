import { Component, inject, OnDestroy } from "@angular/core";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";
import { CvService } from "../services/cv.service";
import { Cv } from "../model/cv";
import { ToastrService } from "ngx-toastr";
import { ActivatedRoute, Router, RouterOutlet } from "@angular/router";
import { Subscription } from "rxjs";
import { ListComponent } from "../list/list.component";

@Component({
    selector: "app-master-details",
    templateUrl: "./master-details.component.html",
    styleUrls: ["./master-details.component.css"],
    imports: [ListComponent, RouterOutlet]
})
export class MasterDetailsComponent {
  acr = inject(ActivatedRoute);
  cvs: Cv[] = this.acr.snapshot.data["cvs"];
  cvService = inject(CvService);
  toastr = inject(ToastrService);
  router = inject(Router);
  subscribtion!: Subscription;
  constructor() {
    this.subscribtion = this.cvService.selectedCv$
      .pipe(takeUntilDestroyed())
      .subscribe({
        next: (cv) => this.detailsCv(cv),
      });
    // this.cvService.getCvs().subscribe({
    //   next: (cvs) => {
    //     this.cvs = cvs;
    //   },
    //   error: () => {
    //     this.cvs = this.cvService.getFakeCvs();
    //     this.toastr.error(`
    //       Attention!! Les données sont fictives, problème avec le serveur.
    //       Veuillez contacter l'admin.`);
    //   },
    // });
  }
  detailsCv(cv: Cv) {
    this.router.navigate([cv.id], {
      relativeTo: this.acr,
    });
  }
}
