export class Todo {
  public title: string;
  public priority: string;
  constructor(title: string = '', priority: string = 'normal') {
    this.title = title;
    this.priority = priority;
  }
}
