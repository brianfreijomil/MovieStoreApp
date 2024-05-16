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

  movies:Movie[] = [
    {
      id:1,
      name:"The Lord of the Rings: The Fellowship of the Ring",
      genre:"suspence",
      price:250,
      stock:100,
      urlImage:"/assets/images/aliens.jpg"
    },
    {
      id:2,
      name:"Aliens 2",
      genre:"suspence",
      price:250,
      stock:100,
      urlImage:"/assets/images/aliens.jpg"
    },
    {
      id:1,
      name:"The Lord of the Rings: The Fellowship of the Ring",
      genre:"suspence",
      price:250,
      stock:100,
      urlImage:"/assets/images/aliens.jpg"
    },
    {
      id:1,
      name:"The Lord of the Rings: The Fellowship of the Ring",
      genre:"suspence",
      price:250,
      stock:100,
      urlImage:"/assets/images/aliens.jpg"
    },
    {
      id:1,
      name:"The Lord of the Rings: The Fellowship of the Ring",
      genre:"suspence",
      price:250,
      stock:100,
      urlImage:"/assets/images/aliens.jpg"
    },
    {
      id:1,
      name:"The Lord of the Rings: The Fellowship of the Ring",
      genre:"suspence",
      price:250,
      stock:100,
      urlImage:"/assets/images/aliens.jpg"
    },
    {
      id:1,
      name:"The Lord of the Rings: The Fellowship of the Ring",
      genre:"suspence",
      price:250,
      stock:100,
      urlImage:"/assets/images/aliens.jpg"
    },
    {
      id:1,
      name:"The Lord of the Rings: The Fellowship of the Ring",
      genre:"suspence",
      price:250,
      stock:100,
      urlImage:"/assets/images/aliens.jpg"
    },
    {
      id:1,
      name:"The Lord of the Rings: The Fellowship of the Ring",
      genre:"suspence",
      price:250,
      stock:100,
      urlImage:"/assets/images/aliens.jpg"
    },
    {
      id:1,
      name:"The Lord of the Rings: The Fellowship of the Ring",
      genre:"suspence",
      price:250,
      stock:100,
      urlImage:"/assets/images/aliens.jpg"
    },
    {
      id:1,
      name:"The Lord of the Rings: The Fellowship of the Ring",
      genre:"suspence",
      price:250,
      stock:100,
      urlImage:"/assets/images/aliens.jpg"
    },
    {
      id:1,
      name:"The Lord of the Rings: The Fellowship of the Ring",
      genre:"suspence",
      price:250,
      stock:100,
      urlImage:"/assets/images/aliens.jpg"
    },
    {
      id:1,
      name:"The Lord of the Rings: The Fellowship of the Ring",
      genre:"suspence",
      price:250,
      stock:100,
      urlImage:"/assets/images/aliens.jpg"
    },
    {
      id:1,
      name:"The Lord of the Rings: The Fellowship of the Ring",
      genre:"suspence",
      price:250,
      stock:100,
      urlImage:"/assets/images/aliens.jpg"
    },
    {
      id:1,
      name:"The Lord of the Rings: The Fellowship of the Ring",
      genre:"suspence",
      price:250,
      stock:100,
      urlImage:"/assets/images/aliens.jpg"
    },
  ];

  constructor(private shoppingCartService:ShoppingCartService) {}

  ngOnInit(): void {
    // this.shoppingCartService.movies.subscribe(
    //   data => {
    //     console.log(data);
    //     this.movies = data;
    //   }
    // )
  }

}
