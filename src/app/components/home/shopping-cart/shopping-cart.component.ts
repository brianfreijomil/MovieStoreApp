import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from '../../../services/shopping-cart.service';
import { Movie } from '../../../interfaces/movie';
import { TruncatePipe } from '../../../pipes/truncate.pipe';
import { ModalPayComponent } from '../../reusable/modal-pay/modal-pay.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-shopping-cart',
  standalone: true,
  imports: [TruncatePipe, ModalPayComponent, CommonModule],
  templateUrl: './shopping-cart.component.html',
  styleUrl: './shopping-cart.component.css'
})
export class ShoppingCartComponent implements OnInit {

  movies:Movie[] = [];
  totalToPay:number = 0;
  discountByStock:number = 45;
  modalPayEnable:boolean = false;

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

  removeMovieFromCart(movieId:number) {
    this.movies = this.movies.filter(m => m.id !== movieId);
    this.setTotalToPay();
    this.shoppingCartService.removeMovieToCart(movieId);
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

  setModalPay(status:boolean) {
    this.modalPayEnable = status;
  }

}
