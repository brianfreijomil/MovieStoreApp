import { Component, Input, inject } from '@angular/core';
import { Movie } from '../../../interfaces/movie';
import { CommonModule } from '@angular/common';
import { ShoppingCartService } from '../../../services/shopping-cart.service';

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

  discountByStock:number = 45;  

  constructor(private shoppingCartService:ShoppingCartService) {}

  startTimer() {
    this.timer = setTimeout(() => {
      this.isHovered = true;
    }, 1000); // 2000 ms = 2 segundos
  }

  clearTimer() {
    clearTimeout(this.timer);
    this.isHovered = false;
  }

  addMovieToCart() {
    this.shoppingCartService.addMovieToCart(this.movie!);
  }

}
