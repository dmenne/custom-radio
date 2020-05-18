import { Component, EventEmitter, Input, OnInit, Output  } from '@angular/core'
import { FormioCustomComponent } from 'angular-formio'
import { DataValue } from '../custom-component'

@Component({
  selector: 'app-multicheck-buttons',
  templateUrl: './multicheck-buttons.component.html',
  styleUrls: ['../custom-component.scss']

})

export class MulticheckButtonsComponent  implements
  FormioCustomComponent<Record<string, boolean>>, OnInit {

  @Input()
  value: Record<string, boolean>

  @Input()
  type: string

  @Input()
  input: boolean

  @Input()
  key: string

  @Input()
  label: string

  @Output()
  valueChange = new EventEmitter<Record<string, boolean>>()

  @Input()
  values: [DataValue]

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
    const ret =  this.values &&
     Object.keys(this.values).length !== 0 &&
     this.values[0].label !==  ''
    // Last line is required because of a bug
    // Check again when multi-call of ngOnInit has been resolved
    return ret
  }

  isChecked(val: string) {
    // Explicit === true required
    return this.value[val] === true
  }

  //  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find

  icon(val: string) {
    const ic = this.values.find(({ value }) => value === val).icon
    const ret = ic ?  ic :  this.isChecked(val) ? 'check-circle' : 'circle-o'
    return ret
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
    this.value[payload] = !this.value[payload]
    this.valueChange.emit(this.value) ;
  }
}

/*
{
  "data": {
      "mySelect": {
          "first": true,
          "second": false
      },
      "submit": false
  },
  "metadata": {}
}
*/
