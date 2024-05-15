import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MoviesComponent } from './movies/movies.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, RouterOutlet, MoviesComponent, ShoppingCartComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
