import { Component, OnInit } from '@angular/core';
import { AddJokeComponent } from '../add-joke/add-joke.component';
import { JokeComponent } from '../joke/joke.component';
import { Routes } from '@angular/router';



@Component({
  selector: 'cnt-nav-bar',
  template: `
  <h1 style="text-align: left;">The Social 
  <br>Net Joke</h1>
<nav class="nav flex-column" style="margin-top: 100px;">
  <ul>
    <a  routerLink="/add-joke" routerLinkActive="active" class="nav-link">Add a joke</a>
    <a routerLink="/scroller" routerLinkActive="active" class="nav-link">Read some jokes</a>
  </ul>
   
</nav>

  `,
  styles: [
  ]
})
export class NavBarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
