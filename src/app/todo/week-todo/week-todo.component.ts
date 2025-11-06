import { Component } from '@angular/core';
import { TodoComponent } from '../todo/todo.component';

@Component({
    selector: 'app-week-todo',
    templateUrl: './week-todo.component.html',
    styleUrls: ['./week-todo.component.css'],
    imports: [TodoComponent]
})
export class WeekTodoComponent {

}
