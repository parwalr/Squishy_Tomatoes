import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  getAllMovies(){
    return this._http.get("/all");
  }

  getOneMovie(id:string){
    return this._http.get("/one/"+id);
  }

  addMovie(newMovie){
    console.log("IN SERVICE")
    return this._http.post('/movies', newMovie);
  }

  addRating(newRating, movieId){
    console.log(newRating)
    return this._http.post(`/review/${movieId}`, newRating);
  }

  deleteMovie(id:string){
    return this._http.delete(`/movies/${id}`);
  }
}
