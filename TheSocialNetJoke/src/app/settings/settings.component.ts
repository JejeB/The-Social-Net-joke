import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cnt-settings',
  template: `

<h2>Language Settings</h2>
  <p><button type="button" class="btn btn-primary">French</button></p>
  <p><button type="button" class="btn btn-primary">English</button></p>
  <p><button type="button" class="btn btn-primary">German</button></p>
  <p><button type="button" class="btn btn-primary">Spanish</button></p>
  <p><button type="button" class="btn btn-primary">Czech</button></p>
  <p></p>
<h2>Blacklist</h2>
<div class="form-check form-switch">
  <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" checked>
  <label class="form-check-label" for="flexSwitchCheck">nsfw</label>
</div>
<div class="form-check form-switch">
  <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked" checked>
  <label class="form-check-label" for="flexSwitchCheck">religious</label>
</div>
<div class="form-check form-switch">
  <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked" checked>
  <label class="form-check-label" for="flexSwitchCheck">political</label>
</div>
<div class="form-check form-switch">
  <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked" checked>
  <label class="form-check-label" for="flexSwitchCheck">religious</label>
</div>

   
  `,
  styles: [
  ]
})
export class SettingsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
