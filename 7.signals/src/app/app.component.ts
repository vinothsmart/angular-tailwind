import { Component, signal } from '@angular/core';
import { Todo } from './interfaces/todo';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  count = signal<number>(0);
  todos = signal<Todo[]>([]);
  newTodo = signal<string>('');

  ngOnInit() {
    console.log(this.count());
  }

  handleInput(event: Event) {
    const target = event.target as HTMLInputElement;
    this.newTodo.set(target.value);
  }

  addTodo() {
    const text = this.newTodo();
    if (text) {
      const newTodo: Todo = {
        id: this.todos().length + 1,
        text,
        done: false,
      };
      this.todos.update((todos) => [...todos, newTodo]);
      this.newTodo.set('');
    }
  }

  deleteTodo(id: number) {
    this.todos.update((todos) => todos.filter((todo) => todo.id !== id));
  }
}
