import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class GamesService {
  static base_url = environment.base_url;

  constructor(private http: HttpClient) {}

  getGameGenerationList(): any{
    return this.http.get(`${GamesService.base_url}v2/generation/`).pipe(
      map((obj) => obj),
      catchError(async (error) => console.log(error))
    );
  }

  getGameGenerationById(id): any {
    return this.http.get(`${GamesService.base_url}v2/generation/${id}/`).pipe(
    map((obj) => obj),
    catchError(async (error) => console.log(error))
    );
  }
}
