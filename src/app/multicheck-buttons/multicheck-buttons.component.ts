import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { FormioCustomComponent } from 'angular-formio'

@Component({
  selector: 'app-multicheck-buttons',
  templateUrl: './multicheck-buttons.component.html',
  styleUrls: ['./multicheck-buttons.component.scss']

})

export class MulticheckButtonsComponent  implements FormioCustomComponent<string>, OnInit {

  @Input()
  value: string

  @Input()
  type: string

  @Input()
  input: boolean

  @Input()
  key: string

  @Input()
  label: string

  @Output()
  valueChange = new EventEmitter<string>()

  @Input()
  values: {}

  @Input()
  disabled: boolean

  @Input()
  hidden: boolean

  @Input()
  buttonStyle: string

  @Input()
  inline: boolean ;


  ngOnInit() {
    console.log('multi checkboxes onInit')
  }

  showGroup() {
    return  !this.hidden && this.values && ((this.values[0].value) !== '');
  }

  isChecked(val: string) {
    return this.value && (val === this.value)
  }

  buttonClass(val: string) {
    const btn =
      'btn mr-1  mb-2  btn-outline-'  +
      this.buttonStyle + ' ' +
      (this.isChecked(val) ? 'active' : '') +
      (this.inline ? ' btn-group-rounded' : '')
    return btn
}

  updateValue(payload: string) {
    console.log(payload)
    this.value = payload;
    // this.valueChange.emit(payload);
  }

}
