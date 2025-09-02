import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title: string = 'Angular Introduction';
  myBtn: string = 'Click Me';
  counter: number = 0;

  // attribute binding
  isDisabled: boolean = true;
  angularImage: string = 'https://picsum.photos/300/200?random=1';

  // style binding
  bgColor: string = 'lightblue';
  titleColor: string = 'darkblue';
  description: string = 'font-size:50px; color: gray;';

  //class binding
  redText: string = 'abc';

  incrementCounter() {
    this.counter++;
  }

  inputText: string = 'Initial Value';

  //ngClass
  message: string = 'this is a message';
  classes: string = 'danger text-style';

  //ngStyle
  selectedColor: string = 'red';
}
