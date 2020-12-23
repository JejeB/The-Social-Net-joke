import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CookieManagerService } from '../cookie-manager.service';


@Component({
  selector: 'cnt-settings',
  template: `

<h2>Language Settings</h2><div class="row">
  <p *ngIf="lang=='en'"><button type="button" class="btn btn-primary col-sm" (click)="english()">English</button></p>
  <p *ngIf="lang!='en'"><button type="button" class="btn btn-secondary col-sm" (click)="english()">English</button></p>

  <p *ngIf="lang=='de'"><button type="button" class="btn btn-primary col-sm" (click)="german()">German</button></p>
  <p *ngIf="lang!='de'"><button type="button" class="btn btn-secondary col-sm" (click)="german()">German</button></p>

  <p *ngIf="lang=='es'"><button type="button" class="btn btn-primary col-sm" (click)="spanish()">Spanish</button></p>
  <p *ngIf="lang!='es'"><button type="button" class="btn btn-secondary col-sm" (click)="spanish()">Spanish</button></p>

  <p *ngIf="lang=='cs'"><button type="button" class="btn btn-primary col-sm" (click)="czech()">Czech</button></p>
  <p *ngIf="lang!='cs'"><button type="button" class="btn btn-secondary col-sm" (click)="czech()">Czech</button></p>
  <p></p>
  </div>
<h2>Blacklist</h2><div class="row">




<div class="form-check">
  <div *ngIf="flags.get('nsfw')==0"><input class="form-check-input" type="checkbox" id="defaultCheck1"  (change)="E_nsfw()" ></div>
  <div *ngIf="flags.get('nsfw')==1"><input class="form-check-input" type="checkbox" id="defaultCheck1"  (change)="E_nsfw()" checked></div>
  <label class="form-check-label" for="defaultCheck1" >nsfw</label>
</div>
<div class="form-check">
  <div *ngIf="flags.get('religious')==0"><input class="form-check-input" type="checkbox" value="" id="defaultCheck1"  (change)="E_r()"></div>
  <div *ngIf="flags.get('religious')==1"><input class="form-check-input" type="checkbox" value="" id="defaultCheck1"  (change)="E_r()" checked></div>
  
  <label class="form-check-label" for="defaultCheck1" >religious</label>
</div>
<div class="form-check">
  <div *ngIf="flags.get('political')==0"><input class="form-check-input" type="checkbox" value="" id="defaultCheck1" (change)="E_p()"></div>
  <div *ngIf="flags.get('political')==1"><input class="form-check-input" type="checkbox" value="" id="defaultCheck1" (change)="E_p()" checked></div>
  
  <label class="form-check-label" for="defaultCheck1" >political</label>
</div>
<div class="form-check">
  <div *ngIf="flags.get('racist')==0"><input class="form-check-input" type="checkbox" value="" id="defaultCheck1"  (change)="E_ra()"></div>
  <div *ngIf="flags.get('racist')==1"><input class="form-check-input" type="checkbox" value="" id="defaultCheck1"  (change)="E_ra()" checked></div>
  
  <label class="form-check-label" for="defaultCheck1" >racist</label>
</div>
<div class="form-check">
  <div *ngIf="flags.get('sexist')==0"><input class="form-check-input" type="checkbox" value="" id="defaultCheck1" (change)="E_s()"></div>
  <div *ngIf="flags.get('sexist')==1"><input class="form-check-input" type="checkbox" value="" id="defaultCheck1" (change)="E_s()" checked></div>
  
  <label class="form-check-label" for="defaultCheck1">sexist</label>
</div>
<button type="button" class="btn btn-success" (click)="apply()" routerLink="/scroller" routerLinkActive="active">Apply</button>
   
  `,
  styles: ['span.selected { background: lightgray }']
})


export class SettingsComponent implements OnInit {
  lang: string = this.cm.getLang()
  n=null;

  flags = this.cm.getFlags()

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


  
   E_nsfw(){
     this.change_flags('nsfw')
   }
   E_r(){
    this.change_flags('religious')
  }
  E_ra(){
    this.change_flags('racist')
  }
  E_s(){
    this.change_flags('sexist')
  }
  E_p(){
    this.change_flags('political')
  }

  change_flags(flag:string){
   
    this.flags.set(flag,1-this.flags.get(flag));
    
  }

  

  apply(){
    
    this.cm.langUpdate(this.lang)
    this.cm.FlagsUpdate(this.flags)
  }

  constructor(private cm: CookieManagerService) { }

  ngOnInit(): void {
  }

}
