import { Component, OnInit } from '@angular/core';
import { Joke } from '../joke/joke';

@Component({
  selector: 'cnt-add-joke',
  template: `
  

  <div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 class="display-4">Add Joke : </h1>
    
  </div>
</div>

    <hr>

    <p></p>
    <h3>Categorie</h3>
  <div class="row">
    <div class="col">


  <div class="btn-group btn-group-toggle">
      <label class="btn" ngbButtonLabel>
      <input type="checkbox"  ngbButton checked >Miscellaneous</label>
      <label class="btn" ngbButtonLabel>
      <input type="checkbox"  ngbButton>Programming</label>
      <label class="btn" ngbButtonLabel>
      <input type="checkbox"  ngbButton>Dark</label>
      <label class="btn" ngbButtonLabel>
      <input type="checkbox" ngbButton>Pun</label>
      <label class="btn" ngbButtonLabel>
      <input type="checkbox" ngbButton>Spooky</label>
      <label class="btn" ngbButtonLabel>
      <input type="checkbox" ngbButton>Christmas</label>
  </div>

<hr>
    <p></p>
    <h3>Type</h3>
    <div class="row">
    <div class="col">
      <div  class="d-inline-block">
      <select class="browser-default custom-select">
      <option selected value="single" (click)="single()" >Single</option>
      <option value="two_part" (click)="two_part()">Two Part</option>
      </select>
      </div>
    </div>
    </div>

<hr>
    <p></p>
    <h3>Language</h3>
    <div class="row">
    <div class="col">
    <div  class="d-inline-block">
    <select class="browser-default custom-select">
      <option selected value ="en" >en - English</option>
      <option value="custom">Other/Custom</option>
      <option value="cs">cs - Czech</option>
      <option value="de">de - German</option>
      <option value="es">es - Spanish</option>
    </select>
    </div></div></div>

<hr>
    <p></p>
    <h3>Flags</h3> 

    <div class="btn-group btn-group-toggle">
      <label class="btn" ngbButtonLabel>
      <input type="checkbox" value="nsfw" ngbButton  >nsfw</label>
      <label class="btn" ngbButtonLabel>
      <input type="checkbox" value="religious" ngbButton>religious</label>
      <label class="btn" ngbButtonLabel>
      <input type="checkbox" value="political" ngbButton>political</label>
      <label class="btn" ngbButtonLabel>
      <input type="checkbox" value="racist" ngbButton>racist</label>
      <label class="btn" ngbButtonLabel>
      <input type="checkbox" value="sexist" ngbButton>sexist</label>
  </div>
  
<hr>  
    <p></p>
    <h3>Joke</h3>
    <div>

    <label for="Joke">Set up</label>
    <input id="Joke" type="text" >

    </div>
    <p></p>
    <div>
      <label for="Joke">Set up</label>
      <input id="Joke" type="text" >
    </div>
    <p></p>
    <div>
      <label for="Joke">Delivery</label>
      <input id="Joke" type="text" >
    </div>
    
  `,
  styles: []
})
export class AddJokeComponent implements OnInit {

  single(){
     
  }

  two_part(){

  }


  constructor() { }

  ngOnInit(): void {
  }

}
