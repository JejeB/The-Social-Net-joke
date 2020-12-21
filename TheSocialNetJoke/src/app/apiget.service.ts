import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Joke } from './joke/joke';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApigetService {
    lang : String ="en"
   myUrl = 'https://sv443.net/jokeapi/v2/joke/Any?lang='+this.lang+'&type=single&amount=10';


   constructor(private httpClient: HttpClient) { }


  getJokes():any  {
    return this.httpClient.get(this.myUrl)
    
  }




}
