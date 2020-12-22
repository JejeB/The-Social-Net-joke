import { Component } from '@angular/core';



@Component({
  selector: 'cnt-root',
  template: `
    <!--The content below is only a placeholder and can be replaced.-->
    <div style="text-align:center" class="content container">
      <h1>
        Welcome to {{title}}!
      </h1>
      <div class="row">
      <div class="col-sm"><cnt-nav-bar></cnt-nav-bar></div>
      <div class="col-8"><router-outlet></router-outlet></div>
      <div class="col-sm"><cnt-settings></cnt-settings></div>
      </div>
      
  `,
  styles: []
})
export class AppComponent {
  title = 'TheSocialNetJoke';
}
/*
 <cnt-scroller class="col-6"></cnt-scroller>
      <cnt-add-joke class="col-sm"></cnt-add-joke>
*/