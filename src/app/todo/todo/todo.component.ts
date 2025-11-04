import { Component, inject } from "@angular/core";
import { Todo } from "../model/todo";
import { TodoService } from "../service/todo.service";
import { CanLeave } from "../../guards/can-leave.interface";

@Component({
  selector: "app-todo",
  templateUrl: "./todo.component.html",
  styleUrls: ["./todo.component.css"],
  providers: [TodoService],
})
export class TodoComponent implements CanLeave {
  todos: Todo[] = [];
  todo = new Todo();
  todoService = inject(TodoService);
  constructor() {
    this.todos = this.todoService.getTodos();
  }
  canLeave(): boolean {
    return this.todo.name.trim() || this.todo.content.trim() ? false : true;
  }
  addTodo() {
    this.todoService.addTodo(this.todo);
    this.todo = new Todo();
  }

  deleteTodo(todo: Todo) {
    this.todoService.deleteTodo(todo);
  }
}
