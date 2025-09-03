import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = '3.ControlFlow';

  a: number = 2;
  b: number = 3;
  c: number = 4;

  items = [
    {
      id: 1,
      name: 'Item 1',
    },
    {
      id: 2,
      name: 'Item 2',
    },
    {
      id: 3,
      name: 'Item 3',
    },
  ];
}
