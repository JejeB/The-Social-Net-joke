import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie';


@Injectable({
  providedIn: 'root'
})
export class CookieManagerService {

  constructor(private cookieService: CookieService ) { 
    
  }

  langUpdate(lange:string){ // Call when we click on the apply button of settings and update the cookie with the new lang config
    this.cookieService.put( 'lang',lange );
  }

  FlagsUpdate(flags:Map<string, number>){ // Same for the flags
    let mySerialMap = JSON.stringify(Array.from(flags.entries())) // Need to parse the map object to put in the cookie in string
    
   this.cookieService.put('flags',mySerialMap)
   
  }

  getLang(){
    let s:string;
    
    if(this.cookieService.get('lang')!='en' && this.cookieService.get('lang')!='cs' && 
    this.cookieService.get('lang')!='de'&&this.cookieService.get('lang')!='es'){ // Test if the langege is accepted
      console.log('Langue non pris en charge : '+this.cookieService.get('lang'))
      return 'en'
    }
    return this.cookieService.get('lang');
  }

  getFlags(){

    let myMap = new Map([
    [ "nsfw", 0 ],
    [ "religious", 0 ],
    [ "racist", 0 ],
    [ "sexist", 0 ],
    [ "political", 0 ]
]); 
    if(this.cookieService.get('flags')){
        myMap = new Map(JSON.parse(this.cookieService.get('flags')))
    }else{
      console.log("Pas de cookie Flags")
    }
    
    
    return myMap;
    
  }

}
