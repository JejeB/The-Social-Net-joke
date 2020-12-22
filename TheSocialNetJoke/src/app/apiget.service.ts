import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Joke } from './joke/joke';
import { Observable, throwError } from 'rxjs';
import { CookieManagerService } from './cookie-manager.service';

@Injectable({
  providedIn: 'root'
})
export class ApigetService {
    lang : String ="en"
   myUrl = 'https://sv443.net/jokeapi/v2/joke/Any?lang=';


   constructor(private httpClient: HttpClient,private cm: CookieManagerService) { }


  getJokes():any  {
    this.constructUrl();
    console.log(this.myUrl)
    return this.httpClient.get(this.myUrl)

  }
  constructUrl(){
    this.myUrl='https://sv443.net/jokeapi/v2/joke/Any?lang='+this.cm.getLang();

  }



}
