import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AppendPipe } from './pipes/append.pipe';

@Component({
  selector: 'app-root',
  imports: [CommonModule, AppendPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = '4.Pipes';
  today: number = Date.now();
  currency = '1.234533333';
}
