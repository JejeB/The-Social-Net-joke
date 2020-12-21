import { Component, OnInit } from '@angular/core';
import { ApigetService } from '../apiget.service';
import {Joke}from '../joke/joke';

@Component({
  selector: 'cnt-scroller',
  template: `
 
  <cnt-joke *ngFor="let currentJoke of jokes" [thejoke]="currentJoke">
  
  </cnt-joke>
  

  `,
  styles: [
  ]
})
export class ScrollerComponent implements OnInit {

  jokes: Joke[]=[
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
    },
  ];
  constructor(public apiget: ApigetService) { 
    
  }

  ngOnInit(): void {
  }

}
