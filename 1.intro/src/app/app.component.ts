import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title: string = 'Angular Introduction';
  myBtn: string = 'Click Me';
  // attribute binding
  isDisabled: boolean = true;
  angularImage: string = 'https://picsum.photos/300/200?random=1';

  // style binding
  bgColor: string = 'lightblue';
  titleColor: string = 'darkblue';
  description: string = 'font-size:50px; color: gray;';
}
