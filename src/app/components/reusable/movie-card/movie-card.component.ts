import { Component, Input, inject } from '@angular/core';
import { Movie } from '../../../interfaces/movie';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-movie-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './movie-card.component.html',
  styleUrl: './movie-card.component.css'
})
export class MovieCardComponent {

  isHovered = false;
  private timer: any;
  @Input() movie: Movie | undefined;

  startTimer() {
    this.timer = setTimeout(() => {
      this.isHovered = true;
    }, 1000); // 2000 ms = 2 segundos
  }

  clearTimer() {
    clearTimeout(this.timer);
    this.isHovered = false;
  }

}
