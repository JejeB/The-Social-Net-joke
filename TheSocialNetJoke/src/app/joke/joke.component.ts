import { Component, Input, OnInit } from '@angular/core';
import { Joke } from './joke';

@Component({
  selector: 'cnt-joke',
  template: `
  <div class="card jokeCard">
  <div class="card-body">
    <div *ngIf="thejoke.type=='single'">
      {{thejoke.joke}}
    </div>
    <div *ngIf="thejoke.type=='twopart'">
      <p>{{thejoke.setup}}</p>
      <p>{{thejoke.delivery}}</p>  
    </div>
  </div>
  <div class="card-footer text-muted row emoji" >
  <div class="col-sm" *ngIf="!selected[3]">
    <i class="material-icons col-sm" (click)="rank(3)" >sentiment_very_satisfied</i>
  </div>
  <div class="col-sm" *ngIf="selected[3]">
    <i class="material-icons col-sm" style="background:coral" >sentiment_very_satisfied</i>
  </div>
  
  <div class="col-sm" *ngIf="!selected[2]">
    <i class="material-icons col-sm" (click)="rank(2)" >sentiment_satisfied</i>
  </div>
  <div class="col-sm" *ngIf="selected[2]">
    <i class="material-icons col-sm" style="background:coral" >sentiment_satisfied</i>
  </div>

  <div class="col-sm" *ngIf="!selected[1]">
    <i class="material-icons col-sm" (click)="rank(1)" >sentiment_dissatisfied</i>
  </div>
  <div class="col-sm" *ngIf="selected[1]">
    <i class="material-icons col-sm" style="background:coral" >sentiment_dissatisfied</i>
  </div>
  <div class="col-sm" *ngIf="!selected[0]">
    <i class="material-icons col-sm" (click)="rank(0)" >sentiment_very_dissatisfied</i>
  </div>
  <div class="col-sm" *ngIf="selected[0]">
    <i class="material-icons col-sm" style="background:coral" >sentiment_very_dissatisfied</i>
  </div>
  
  
  
</div>
  `  ,
  styles: ['.emoji{margin: inherit;} .jokeCard{margin-top: 1rem;}'
  ],
  
})
export class JokeComponent implements OnInit {
  @Input() thejoke: Joke;
   selected:Array<boolean>=[false,false,false,false]

  constructor() { }

  ngOnInit(): void {
  }

  rank(n:number){
    //Reset the tab you can not have two rank one one joke
    for(var i = 0;i<this.selected.length;i++){
      this.selected[i]=false
    }
    
    this.selected[n]=true;
    console.log(this.thejoke.category+"  "+n)
  }
}
