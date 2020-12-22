import { Component, OnInit } from '@angular/core';
import { AddJokeComponent } from '../add-joke/add-joke.component';
import { JokeComponent } from '../joke/joke.component';
import { Routes } from '@angular/router';



@Component({
  selector: 'cnt-nav-bar',
  template: `

<nav class="navbar navbar-default">
  <div class="container-fluid">
    <div class="navbar-collapse">
      <ul class="nav navbar-nav">
        <h1>NAVBAR</h1>
      </ul>
    </div>
  </div>
  <ul>
    <li><a routerLink="/add-joke" routerLinkActive="active">Add a joke</a></li>
    <li><a routerLink="/scroller" routerLinkActive="active">Read some jokes</a></li>
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
