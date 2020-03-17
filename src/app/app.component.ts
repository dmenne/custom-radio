import { Component } from '@angular/core'

@Component({
  selector: 'app-root',
  template: `
  <h2>Formio Custom Radio Buttons Test</h2>
    <form-builder [form]="form" ></form-builder>
  `
})
export class AppComponent {
  form: any = {}

}
