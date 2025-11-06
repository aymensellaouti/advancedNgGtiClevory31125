import { NgModule } from "@angular/core";
import { RouterModule, Route, PreloadAllModules } from "@angular/router";
import { TodoComponent } from "./todo/todo/todo.component";






import { authGuard } from "./auth/guards/auth.guard";
import { AddCvComponent } from "./cv/add-cv/add-cv.component";
import { CvComponent } from "./cv/cv/cv.component";
import { DetailsCvComponent } from "./cv/details-cv/details-cv.component";

import { MasterDetailsComponent } from "./cv/master-details/master-details.component";
import { cvsResolver } from "./cv/resolvers/cvs.resolver";
import { canLeaveGuard } from "./guards/can-leave.guard";

import { CustomPreloadingStratey } from "./preloading strategis/custom.preloading-strategy";
// 'cv'
export const routes: Route[] = [
  { path: "login", loadComponent: () => import('./auth/login/login.component').then(m => m.LoginComponent) },
  { path: "rh", loadComponent: () => import('./optimizationPattern/rh/rh.component').then(m => m.RhComponent) },
  { path: "products", loadComponent: () => import('./products/products.component').then(m => m.ProductsComponent) },
  {
    path: "todo",
    loadChildren: () => import("./todo/todo.module").then((m) => m.TodoModule),
  },
  {
    path: "cv",
    data: {
      preload: true,
    },
    loadChildren: () => import("./cv/cv.module").then((m) => m.CvModule),
  },
  {
    path: "",
    loadComponent: () => import('./templates/front/front.component').then(m => m.FrontComponent),
    children: [{ path: "word", loadComponent: () => import('./directives/mini-word/mini-word.component').then(m => m.MiniWordComponent) }],
  },
  {
    path: "admin",
    loadComponent: () => import('./templates/admin/admin.component').then(m => m.AdminComponent),
    children: [{ path: "color", loadComponent: () => import('./components/color/color.component').then(m => m.ColorComponent) }],
  },
  { path: "**", loadComponent: () => import('./components/nf404/nf404.component').then(m => m.NF404Component) },
];

//preloadingStrategy: ,
