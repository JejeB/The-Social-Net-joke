import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class CookieManagerService {

  constructor(private cookieService: CookieService ) { 
    
  }

  langUpdate(lange:string){
    this.cookieService.set( 'lang',lange );
  }
  getLang(){
    let s:string;
    if(!this.cookieService.check('lang')){
      console.log('Aucun cookie')
      return 'en'
    }
    if(this.cookieService.get('lang')!='en' && this.cookieService.get('lang')!='cs' && 
    this.cookieService.get('lang')!='de'&&this.cookieService.get('lang')!='es'){
      console.log('Langue non pris en charge : '+this.cookieService.get('lang'))
      return 'en'
    }
    return this.cookieService.get('lang');
  }

}
