import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Movie-Search-app';

  hello = 'hello from movie search component';
//pass movies array
  movies[
    { title: 'White Heat' }
    { title: 'The Departed  ' }
{ title: 'Man Bites Dog' }
{ title: 'The Godfather ' }
{ title: 'La Haine ' }
{ title: 'The 400 Blows ' }
{ title: 'harry potter ' }
{ title: 'Avator ' }
{ title: 'Batman' }
]
  getName() //validating
  {
    alert("sagar salunke")
  }
  constructor() { }

  ngOnInit(): void {

    fetch('http://www.omdbapi.com/?s=batman&apikey=4a249f8d')
      .then(Response => Response.json());
      .then(res => this.movies = res.Search);
  }
}
