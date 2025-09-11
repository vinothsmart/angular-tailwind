import { Component } from '@angular/core';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  imports: [],
  providers: [DataService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  data: string[] = [];

  constructor(private dataService: DataService) {
    this.data = this.dataService.getData();
  }
}
