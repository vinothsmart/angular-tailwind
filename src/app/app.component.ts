import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  template: `
    <h1>Welcome to {{ title }}!</h1>
    <p>This is a simple Angular application styled with Tailwind CSS.</p>

    <router-outlet />
  `,
  styles: [
    `
      p {
        background-color: #f3f4f6;
      }
    `,
  ],
})
export class AppComponent {
  title = 'angular-tailwind';
}
