import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cnt-add-joke',
  template: `
    <p>
      add-joke works!
    </p>
  `,
  styles: ['span.selected { background: lightgray }']
})
export class AddJokeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
