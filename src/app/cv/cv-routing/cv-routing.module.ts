import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { authGuard } from "../../auth/guards/auth.guard";

import { CvComponent } from "../cv/cv.component";

import { cvsResolver } from "../resolvers/cvs.resolver";

export const CV_ROUTES = [
  {
    path: "list",
    loadComponent: () =>
      import("../master-details/master-details.component").then(
        (m) => m.MasterDetailsComponent
      ),
    resolve: {
      cvs: cvsResolver,
    },
    children: [
      {
        path: ":id",
        loadComponent: () =>
          import("../details-cv/details-cv.component").then(
            (m) => m.DetailsCvComponent
          ),
      },
    ],
  },
  {
    path: "",
    loadComponent: () =>
      import("../cv/cv.component").then((m) => m.CvComponent),
  },
  {
    path: "add",
    loadComponent: () =>
      import("../add-cv/add-cv.component").then((m) => m.AddCvComponent),
    canActivate: [authGuard],
  },
  {
    path: ":id",
    loadComponent: () =>
      import("../details-cv/details-cv.component").then(
        (m) => m.DetailsCvComponent
      ),
  },
];
@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(CV_ROUTES)],
})
export class CvRoutingModule {}
