import { Component, OnInit } from '@angular/core';
import { Movie } from '../../../interfaces/movie';
import { MovieService } from '../../../services/movie.service';
import { CommonModule } from '@angular/common';
import { MovieCardComponent } from '../../reusable/movie-card/movie-card.component';

@Component({
  selector: 'app-movies',
  standalone: true,
  imports: [CommonModule, MovieCardComponent],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.css'
})
export class MoviesComponent implements OnInit{

  title = 'Choose the movies you want to rent';
  movieList:Movie[] = [];

  constructor(private movieService:MovieService) {

  }

  getMovies() {

    this.movieService.getMovies().subscribe({
      next:(data) => {
        if(data) {
          console.log(data);
          this.movieList = data;
        }
        else
          console.log("No error but No data");
      },
      error:(err) => {
        console.log(err);
      }
    });

  }

  ngOnInit(): void {
    this.getMovies();
    console.log(this.movieList);
  }
  
}
