import { Component, OnInit } from '@angular/core';
import { ApigetService } from '../apiget.service';
import {Joke} from '../joke/joke'

@Component({
  selector: 'cnt-scroller',
  template: `
  
  <cdk-virtual-scroll-viewport itemSize="4" style="height: 250px">


  <cnt-joke *cdkVirtualFor="let currentJoke of jokestab" [thejoke]="currentJoke">
  </cnt-joke>
  </cdk-virtual-scroll-viewport>
  
  `,
  styles: [
  ]
})
export class ScrollerComponent implements OnInit {

  jokestab: any =[
    {
      id: 1,
      error: false,
      category:"string",
      joke:"C'est un mec il s'appelle niet et son pote arrive et il dit coucou niet !",
      lang:"eng"
    },
    {
      id: 2,
      error: false,
      category:"string",
      joke:"C'est un mec il s'appelle niet et son pote arrive et il dit coucou niet !",
      lang:"eng"
    },
    {
      id: 3,
      error: false,
      category:"string",
      joke:"C'est un mec il s'appelle niet et son pote arrive et il dit coucou niet !",
      lang:"eng"
    },{
      id: 3,
      error: false,
      category:"string",
      joke:"C'est un mec il s'appelle niet et son pote arrive et il dit coucou niet !",
      lang:"eng"
    },
  ];
  constructor(public apiget: ApigetService) { 
    
  }

  ngOnInit(): void {
    this.fetchJokes();
    
    console.log(this.jokestab)
  }

  fetchJokes(){
    this.apiget.getJokes().subscribe(data =>{
      for(const d of (data.jokes as any)){
        this.jokestab.push({
          id: d.id,
          error: d.error,
          category: d.category,
          joke: d.joke,
          lang:d.lang
        })
      }
    })
  }

}
