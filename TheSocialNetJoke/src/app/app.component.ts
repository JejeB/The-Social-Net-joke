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
      <cnt-nav-bar class="col-sm"></cnt-nav-bar>
      <cnt-scroller class="col-6"></cnt-scroller>
      <cnt-settings class="col-sm"></cnt-settings>
      </div>
     
    
  `,
  styles: []
})
export class AppComponent {
  title = 'TheSocialNetJoke';
}
