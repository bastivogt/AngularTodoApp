import { Component } from '@angular/core';
import { Todo } from './todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Todo App';

  todos: Todo[] = [
    new Todo('Angular lernen', 'hoch'),
    new Todo('Designen', 'niedrig'),
  ];

  onAddTodo(todo: Todo) {
    this.todos.push(todo);
  }

  onDeleteTodo(index: number) {
    //console.log(index);
    this.todos.splice(index, 1);
  }
}
