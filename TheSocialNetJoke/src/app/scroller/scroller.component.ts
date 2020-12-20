import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cnt-scroller',
  template: `
 
  <cnt-joke></cnt-joke>
  <cnt-joke></cnt-joke>
  <cnt-joke></cnt-joke>
  <cnt-joke></cnt-joke>
  <cnt-joke></cnt-joke>

  `,
  styles: [
  ]
})
export class ScrollerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
