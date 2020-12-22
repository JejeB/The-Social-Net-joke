import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ScrollingModule } from '@angular/cdk/scrolling';


import { AppComponent } from './app.component';
import { ScrollerComponent } from './scroller/scroller.component';
import { JokeComponent } from './joke/joke.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SettingsComponent } from './settings/settings.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AddJokeComponent } from './add-joke/add-joke.component';
import { componentFactoryName } from '@angular/compiler';


const appRoutes: Routes = [
  
  {
      path: 'add-joke',
      component: AddJokeComponent
  },
  {
    path: 'scroller',
    component: ScrollerComponent
  }

  ];


@NgModule({
  
  declarations: [
    AppComponent,
    ScrollerComponent,
    JokeComponent,
    AddJokeComponent,
    NavBarComponent,
    SettingsComponent
  ],
  
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,
    ScrollingModule,
    RouterModule.forRoot(appRoutes),
  ],

  providers: [],
  
  bootstrap: [AppComponent],

  exports: [RouterModule]
})
export class AppModule { }
