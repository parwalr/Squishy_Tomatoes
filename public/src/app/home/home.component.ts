import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  movies:any = [];

  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.getAllMovies();
  }

  getAllMovies(){
    let observable = this._httpService.getAllMovies();
    observable.subscribe(data => { 
      console.log("~Loading All Movies~", data)
      this.movies = data
    });
  }

}
