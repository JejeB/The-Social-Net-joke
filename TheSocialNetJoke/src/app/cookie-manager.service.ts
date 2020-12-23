import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie';
import { Joke } from './joke/joke';


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
  RankingUpdate(joke:Joke){
    if(this.cookieService.get('rank')){
      let tabJoke = JSON.parse(this.cookieService.get('rank'))

      //Check And replace if it is a rank on the same joke
      tabJoke=this.CheckAndReplace(tabJoke,joke);
      
      console.log(tabJoke)
      this.cookieService.put('rank',JSON.stringify(tabJoke))

    }else{
      console.log('Ranking cooking not create')
     // console.log(joke)
      let tabJoke: Array<Joke>=[];
      tabJoke.push(joke)

      this.cookieService.put('rank',JSON.stringify(tabJoke))
      console.log(JSON.parse(this.cookieService.get('rank')))
    }
  }
  
  CheckAndReplace(tabJoke,joke){
    for(let i=0;i<tabJoke.length;i++){
      if(tabJoke[i].id==joke.id){
        tabJoke[i].note=joke.note;
        return tabJoke
      }
    }
    tabJoke.push(joke)
    return tabJoke
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
  deleteCookies(){
    this.cookieService.removeAll()
  }

  getCategoryIA(){
    let pref = new Map([
      [ "Programming", 10 ],
      [ "Miscellaneous", 10 ],
      [ "Dark", 10 ],     // This is a map of preference for the user at the begining all categori have the same score, if you make a like that will up the category and down the other
      [ "Pun", 10 ],
      [ "Spooky", 10 ],
      ["Christmas",10]
  ]);
  let cat:string;
  //UPDATE TAB BY COOKIE
  cat=this.RadomChoice(pref)

    return this.RadomChoice(pref)
  }

  RadomChoice(pref){
    let rand :number = Math.floor(Math.random() * 60) + 1 
    //console.log(rand)
    let somme:number=0;
    let cat:string='Any' 
    pref.forEach((value: number, key: string) => {        //Get a random category using pref map the value influence the chance to get more or less to get the category 
      somme=somme+value
      if (rand>somme && rand<somme+value) {
        //console.log(rand +" : "+key)
        cat=key
      }
      
  });
  return cat
  }
 
}
