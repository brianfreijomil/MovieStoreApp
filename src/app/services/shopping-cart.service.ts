import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { Movie } from "../interfaces/movie";

@Injectable({
providedIn: 'root'
})
export class ShoppingCartService {

    private _movies: Movie[] = [];
    private _moviesSubject: BehaviorSubject<Movie[]> = new BehaviorSubject(this._movies);
    public movies: Observable<Movie[]> = this._moviesSubject.asObservable();

    constructor() { }

    addMovieToCart(m: Movie) {
        const movieExistence = this._movies.find(movie => movie.id==m.id);
        if(movieExistence === undefined) {
        this._movies.push(m);
        this._moviesSubject.next(this._movies);
        }
    }

    getMovieById(id: number) {
        return this._movies.find(movie => movie.id==id);
    }

}
