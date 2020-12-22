import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CookieManagerService } from '../cookie-manager.service';


@Component({
  selector: 'cnt-settings',
  template: `

<h2>Language Settings</h2><div class="row">
  <p><button type="button" class="btn btn-primary col-sm" (click)="english()">English</button></p>
  <p><button type="button" class="btn btn-primary col-sm" (click)="german()">German</button></p>
  <p><button type="button" class="btn btn-primary col-sm" (click)="spanish()">Spanish</button></p>
  <p><button type="button" class="btn btn-primary col-sm" (click)="czech()">Czech</button></p>
  <p></p>
  </div>
<h2>Blacklist</h2><div class="row">




<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" [(ngModel)]="nfsw" (change)="Event_nsfw()">
  <label class="form-check-label" for="defaultCheck1" >nsfw</label>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" [(ngModel)]="religious" (change)="Event_religious()">
  <label class="form-check-label" for="defaultCheck1" >religious</label>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" [(ngModel)]="political" (change)="Event_political()">
  <label class="form-check-label" for="defaultCheck1" >political</label>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" [(ngModel)]="racist" (change)="Event_racist()">
  <label class="form-check-label" for="defaultCheck1" >racist</label>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" [(ngModel)]="sexist" (change)="Event_sexist()">
  <label class="form-check-label" for="defaultCheck1">sexist</label>
</div>
<button type="button" class="btn btn-success" (click)="apply()">Apply</button>
   
  `,
  styles: ['span.selected { background: lightgray }']
})
export class SettingsComponent implements OnInit {
  lang: string = "en"
  english(){
    this.lang='en'
  }
  german(){
    this.lang='de'
  }
  spanish(){
    this.lang='es'
  }
  czech(){
    this.lang='cs'
  }


  nfsw: false;
  religious: false;
  political: false;
  racist: false;
  sexist: false;
  


  Event_nsfw(){
    console.log('nfsw change called');
    console.log(this.nfsw);
  }

  Event_religious(){
    console.log('religious change called');
    console.log(this.religious);
  }

  Event_political(){
    console.log('political change called');
    console.log(this.political);
  }

  Event_racist(){
    console.log('racist change called');
    console.log(this.racist)
  }

  Event_sexist(){
    console.log('sexist change called');
    console.log(this.sexist);
  }

  apply(){
    this.cm.langUpdate(this.lang)
  }

  constructor(private cm: CookieManagerService) { }

  ngOnInit(): void {
  }

}
