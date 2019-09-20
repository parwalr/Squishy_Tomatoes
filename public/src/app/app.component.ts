import { Component } from '@angular/core';
import { HttpService } from './http.service';
import { ActivatedRoute, Router } from '@angular/router'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  newMovie: any;
  title = 'Squishy Tomatoes';
  constructor(private _httpService: HttpService, private _router: Router){}

  ngOnInit(){
    this._router.navigate(['movies'])
  }
}
