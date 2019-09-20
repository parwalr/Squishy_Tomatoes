import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  movie: object;

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
  deleteMovie(id:string){
    console.log("got here")
    let observable = this._httpService.deleteMovie(id);
    observable.subscribe(data=>{
      console.log("~Deleting Movie~")
      this._router.navigate(['/movies']);
    })
  }

}
