import { Component } from '@angular/core';
import { DataService } from './services/data.service';
import { Data } from './interfaces/data';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [CommonModule],
  providers: [DataService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  data: string[] = [];
  posts: Data[] = [];

  constructor(private dataService: DataService) {
    this.data = this.dataService.getData();
  }

  ngOnInit() {
    this.dataService.getPosts().subscribe({
      next: (posts: Data[]) => {
        this.posts = posts;
      },
      error: (error) => {
        console.error('Error fetching posts:', error);
      },
    });
  }
}
