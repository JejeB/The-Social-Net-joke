import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cnt-joke',
  template: `
    <p>
      joke works!
    </p>
  `,
  styles: [
  ]
})
export class JokeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
