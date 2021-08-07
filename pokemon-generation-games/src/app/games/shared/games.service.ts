import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class GamesService {

  constructor(private http: HttpClient) {}

  getGameGenerationList(){
    return this.http.get('https://pokeapi.co/api/v2/generation/').pipe(
      map((obj) => obj),
      catchError(async (error) => console.log(error))
    );
  }
}
