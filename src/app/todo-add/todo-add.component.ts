import { Component, Output, EventEmitter } from '@angular/core';
import { Todo } from '../todo';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.css'],
})
export class TodoAddComponent {
  @Output() addTodo = new EventEmitter<Todo>();

  todo = new Todo();

  onSubmitTodo() {
    console.log(this.todo);
    this.addTodo.emit(this.todo);
    this.todo = new Todo();
  }
}
