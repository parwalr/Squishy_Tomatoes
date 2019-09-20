import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-new-movie',
  templateUrl: './new-movie.component.html',
  styleUrls: ['./new-movie.component.css']
})
export class NewMovieComponent implements OnInit {
  error: string;
  backend = {};
  newMovie = {
    title: '',
    ratings: { name: '', rating: '', content: '' }
  }
  constructor(private _httpService: HttpService, private _router: Router, private _route: ActivatedRoute) { }


  ngOnInit() {
  }

  movieSubmit() {
    let observable = this._httpService.addMovie(this.newMovie);
    observable.subscribe((data: any) => {
      if (data.error) {
        console.log(data.error)
        if (data.error.errors.name) {
          this.backend['name'] = data.error.errors.name.message
          console.log("adding backend name error")
        }
        if (data.error.errors.rating) {
          this.backend['rating'] = data.error.errors.rating.message
          console.log("adding backend rating error")
        }
        if (data.error.errors.content) {
          this.backend['content'] = data.error.errors.content.message
          console.log("adding backend content error")
        } else {
          this.newMovie = {
            title: '',
            ratings: { name: '', rating: '', content: '' }
          }
          this._router.navigate(['/movies']);
        }
      }
    })
  }

}
