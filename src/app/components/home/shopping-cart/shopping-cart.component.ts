import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from '../../../services/shopping-cart.service';
import { Movie } from '../../../interfaces/movie';
import { TruncatePipe } from '../../../pipes/truncate.pipe';

@Component({
  selector: 'app-shopping-cart',
  standalone: true,
  imports: [TruncatePipe],
  templateUrl: './shopping-cart.component.html',
  styleUrl: './shopping-cart.component.css'
})
export class ShoppingCartComponent implements OnInit {

  movies:Movie[] = [];
  totalToPay:number = 0;
  discountByStock:number = 45;

  constructor(private shoppingCartService:ShoppingCartService) {}

  ngOnInit(): void {
    this.shoppingCartService.movies.subscribe(
      data => {
        console.log(data);
        this.movies = data;
        this.setTotalToPay();
      }
    )
  }

  setTotalToPay() {
    this.totalToPay = 0;
    this.movies.forEach(m => {
      if ( m.stock > 100 ) {
        this.totalToPay += ((m.price * this.discountByStock) / 100);
      }
      else {
        this.totalToPay += m.price;
      }
    });
  }

}
