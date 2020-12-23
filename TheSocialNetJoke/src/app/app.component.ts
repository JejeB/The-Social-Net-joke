import { Component } from '@angular/core';



@Component({
  selector: 'cnt-root',
  template: `
    <!--The content below is only a placeholder and can be replaced.-->
    <div style="text-align:center" class="content container">
      <div class="row">
      <div class="col-sm"><cnt-nav-bar></cnt-nav-bar></div>
      <div class="col-6"><router-outlet></router-outlet></div>
      <div class="col-sm"><cnt-settings></cnt-settings></div>
      </div>
      
  `,
  styles: []
})
export class AppComponent {
  title = 'TheSocialNetJoke';
}
