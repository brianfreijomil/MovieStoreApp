import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from '../interfaces/movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private url:string = 'https://6643d9c76c6a65658708831f.mockapi.io/api/movies';

  constructor(private http:HttpClient) { }

  getMovies():Observable<Movie[]> {
    return this.http.get<Movie[]>(this.url);
  }
  
}
