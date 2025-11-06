import { NgModule } from "@angular/core";
import { TodoComponent } from "./todo/todo.component";
import { WeekTodoComponent } from "./week-todo/week-todo.component";
import { FormsModule } from "@angular/forms";
import { TodoRoutingModule } from "./todo-routing.module";
import { CommonModule } from "@angular/common";

@NgModule({
    // Les besoins eli mwaferhom el 3ayelti
    imports: [FormsModule, TodoRoutingModule, CommonModule, TodoComponent, WeekTodoComponent],
    // el 7ajet eli nhab nsharihom
    exports: [],
})
export class TodoModule {}
