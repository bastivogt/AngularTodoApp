import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent {
  @Input() todos: Todo[] = [];
  @Output() onDelete = new EventEmitter<number>();

  onDeleteTodo(index: number) {
    //console.log('del in liste ' + index);
    this.onDelete.emit(index);
  }
}
