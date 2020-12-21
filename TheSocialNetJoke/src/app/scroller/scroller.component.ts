import { Component, OnInit } from '@angular/core';
import { ApigetService } from '../apiget.service';

@Component({
  selector: 'cnt-scroller',
  template: `
 
  <cnt-joke></cnt-joke>
  

  `,
  styles: [
  ]
})
export class ScrollerComponent implements OnInit {

  Jokes:any=[]
  constructor(public apiget: ApigetService) { 
    
  }

  ngOnInit(): void {
  }

}
