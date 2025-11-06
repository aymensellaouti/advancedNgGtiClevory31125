import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { canLeaveGuard } from "../guards/can-leave.guard";


export const TODO_ROUTES: Routes = [
  {
    path: "",
    loadComponent: () => import('./todo/todo.component').then(m => m.TodoComponent),
    canDeactivate: [canLeaveGuard],
  },
];
@NgModule({
  imports: [RouterModule.forChild(TODO_ROUTES)],
  exports: [RouterModule],
})
export class TodoRoutingModule {}
