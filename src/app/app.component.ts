import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  form: any = {};
  options = {
    builder: {
      // Suppress some default fields, as an example
      basic: false,
      advanced: false,
      data: false,
      premium: false, // cannot use "true" Why?
      customBasic: {
        title: 'My Basics',
        default: true,
        weight: 0,
        components: {
          textfield: true,
          textarea: true,
        },
      },
      custom: {
        title: 'Big Checks',
        default: true,
        weight: 10,
        components: {
          multicheckbuttons: true,
          checkbox: true,
          radiobuttons: true,
          yesnobuttons: true
        },
      },
    },
  };
}
