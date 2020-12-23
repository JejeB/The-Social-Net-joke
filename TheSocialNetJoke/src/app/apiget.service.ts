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
   
    return this.httpClient.get(this.myUrl) // Send the request GET and get the value in JSON of the awnser 

  }
  constructUrl(){
    
    this.myUrl='https://sv443.net/jokeapi/v2/joke/Any?lang='+this.cm.getLang()+'&blacklistFlags='; // Get the langage in the cookie
    this.addFlags() //Add the blacklist flag to the URL

  }

  addFlags(){
    let flags = this.cm.getFlags()
    
    if(flags.get('nsfw')==1){
      this.myUrl=this.myUrl+'nsfw,'
    }
    if(flags.get('religious')==1){
      this.myUrl=this.myUrl+'religious,'
    }
    if(flags.get('political')==1){
      this.myUrl=this.myUrl+'political,'
    }
    if(flags.get('sexist')==1){
      this.myUrl=this.myUrl+'sexist,'
    }
    if(flags.get('racist')==1){
      this.myUrl=this.myUrl+'racist,'
    }
    this.myUrl= this.myUrl.slice(0,this.myUrl.length-1)
    console.log(this.myUrl)
  }



}
