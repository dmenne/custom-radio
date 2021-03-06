import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { FormioCustomComponent } from 'angular-formio'

@Component({
  selector: 'app-yes-no-buttons',
  templateUrl: './yes-no-buttons.component.html',
  styleUrls: ['../custom-component.scss', './yes-no-buttons.component.scss']

})

export class YesNoButtonsComponent  implements FormioCustomComponent<string>, OnInit {

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
    console.log('yes-no-buttons onInit')
  }

  showGroup() {
    return  !this.hidden && this.values && ((this.values[0].value) !== '');
  }

  isActive(val: string) {
    return this.value && (val === this.value)
  }


  buttonClass(val: string) {
    const btn =
      'btn mr-1  mb-2  btn-outline-'  +
      this.buttonStyle + ' ' +
      (this.isActive(val) ? 'active' : null) +
      (this.inline ? ' btn-group-rounded' : null)
    return btn
  }


  updateValue(payload: string) {
    console.log(payload)
    this.value = payload;
    this.valueChange.emit(payload);
  }

}
