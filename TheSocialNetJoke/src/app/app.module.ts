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




@NgModule({
  declarations: [
    AppComponent,
    ScrollerComponent,
    JokeComponent,
    NavBarComponent,
    SettingsComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,
    ScrollingModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
