import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Joke } from './nav-bar/joke/joke';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApigetService {
   myUrl = 'https://sv443.net/jokeapi/v2/joke/Any?type=single&amount=10';


   constructor(private httpClient: HttpClient) { }


  getJokes(): Observable<Joke> {
    return this.httpClient.get<Joke>(this.myUrl)
    
  }


}
