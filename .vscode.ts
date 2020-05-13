import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { FormioCustomComponent } from 'angular-formio'

@Component({
  selector: 'app-checkbox-button',
  templateUrl: './checkbox-button.component.html',
  styleUrls: ['./checkbox-button.component.scss']

})

export class CheckboxButtonComponent  implements FormioCustomComponent<boolean>, OnInit {

  @Input()
  value: boolean

  @Input()
  type: string

  @Input()
  input: boolean

  @Input()
  key: string

  @Input()
  label: string

  @Output()
  valueChange = new EventEmitter<boolean>()

  @Input()
  disabled: boolean

  @Input()
  hidden: boolean

  @Input()
  buttonStyle: string

  @Input()
  hideLabel: boolean

  @Input()
  icon: string

  ngOnInit() {
    console.log('checkbox-button onInit')
    // Bug in Formio: 6 times on every keypress when editor is open
    this.hideLabel = true  // Does not work; I want to set hideLabel to true by default
  }

  buttonClass() {
    return 'btn btn-checkbox btn-' + (this.value ? '' : 'outline-' ) + this.buttonStyle
  }

  toggleValue() {
    this.value = !this.value;
    this.valueChange.emit(this.value);
  }

}
