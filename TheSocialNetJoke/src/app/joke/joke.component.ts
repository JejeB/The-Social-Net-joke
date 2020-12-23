import { Component, Input, OnInit } from '@angular/core';
import { CookieManagerService } from '../cookie-manager.service';
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

  <div class="col-sm" *ngIf="thejoke.note!=2"><i class="material-icons col-sm" (click)="rank(2)" >sentiment_very_satisfied</i></div>
  <div class="col-sm" *ngIf="thejoke.note==2"><i class="material-icons col-sm" style="background:coral" (click)="deselectAll()">sentiment_very_satisfied</i></div>
  
  <div class="col-sm" *ngIf="thejoke.note!=1"><i class="material-icons col-sm" (click)="rank(1)" >sentiment_satisfied</i></div>
  <div class="col-sm" *ngIf="thejoke.note==1"><i class="material-icons col-sm" style="background:coral" (click)="deselectAll()">sentiment_satisfied</i></div>

  <div class="col-sm" *ngIf="thejoke.note!=-1"><i class="material-icons col-sm" (click)="rank(-1)" >sentiment_dissatisfied</i></div>
  <div class="col-sm" *ngIf="thejoke.note==-1"> <i class="material-icons col-sm" style="background:coral" (click)="deselectAll()">sentiment_dissatisfied</i></div>

  <div class="col-sm" *ngIf="thejoke.note!=-2"><i class="material-icons col-sm" (click)="rank(-2)" >sentiment_very_dissatisfied</i></div>
  <div class="col-sm" *ngIf="thejoke.note==-2"><i class="material-icons col-sm" style="background:coral" (click)="deselectAll()">sentiment_very_dissatisfied</i></div>
  
  
  
</div>
  `  ,
  styles: ['.emoji{margin: inherit;} .jokeCard{margin-top: 1rem;}'
  ],
  
})
export class JokeComponent implements OnInit {
  @Input() thejoke: Joke;
   
  
  constructor(private cm: CookieManagerService) {
   
   }
 
  ngOnInit(): void {
    //console.log(this.thejoke)
  }

  rank(n:number){
   this.thejoke.note=n
    
    
    
    this.cm.RankingUpdate(this.thejoke)
  }
  deselectAll(){
    this.thejoke.note=0
  }


}
