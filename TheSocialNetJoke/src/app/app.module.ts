import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ScrollerComponent } from './scroller/scroller.component';
import { JokeComponent } from './joke/joke.component';

@NgModule({
  declarations: [
    AppComponent,
    ScrollerComponent,
    JokeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
