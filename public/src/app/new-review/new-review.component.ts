import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-new-review',
  templateUrl: './new-review.component.html',
  styleUrls: ['./new-review.component.css']
})
export class NewReviewComponent implements OnInit {
  movie: object;
  newRating = {};
  error: string;
  backend = {};

  constructor(private _httpService: HttpService, private _router:Router, private _route: ActivatedRoute) { }

  ngOnInit() {
    this.findMovie();
  }

  findMovie(){
    this._route.params.subscribe((params)=>{
      console.log("~The ID in the URL is:", params["id"])
      let observable = this._httpService.getOneMovie(params["id"]);
      observable.subscribe((data:any)=>{
        this.movie = data;
        console.log(this.movie);
      })
    })
  }

  ratingSubmit(movieId){
    console.log(movieId);
    let observable = this._httpService.addRating(this.newRating, movieId);
    observable.subscribe((data:any) => {
      if(data.error){
        console.log(data.error) 
        if (data.error.errors.name) {
          this.backend['name'] = data.error.errors.name.message
          console.log("adding backend name error")
        }
        if (data.error.errors.rating) {
          this.backend['rating'] = data.error.errors.rating.message
          console.log("adding backend rating error")
        }
      } else {
      console.log("~Create Comment~");
    this.newRating = { name:"", rating: "", content: "" }
    this._router.navigate(['/movies', movieId]);
    }
  })
}

}
