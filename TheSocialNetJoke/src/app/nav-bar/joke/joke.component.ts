import { Component, OnInit } from '@angular/core';
import { Joke } from './joke';

@Component({
  selector: 'cnt-joke',
  template: `
  <div class="card">
  <div class="card-body">
  {{thejoke.joke}}
  </div>
  <div class="card-footer text-muted row emoji" >
  <i class="material-icons col-sm">sentiment_very_satisfied</i>
  <i class="material-icons col-sm">sentiment_satisfied</i>
  <i class="material-icons col-sm">sentiment_dissatisfied</i>
  <div class="col-sm">
  <i class="material-icons ">sick</i></div>
  </div>
</div>
  `,
  styles: ['.emoji{margin: inherit;}'
  ]
})
export class JokeComponent implements OnInit {
  thejoke :Joke={
    id: 1,
    error: false,
    category:"string",
    joke:"C'est un mec il s'appelle niet et son pote arrive et il dit coucou niet !",
    lang:"eng"
  };

  constructor() { }

  ngOnInit(): void {
  }

}
