import { Component, EventEmitter, Input, OnInit, Output  } from '@angular/core'
import { FormioCustomComponent } from 'angular-formio'

@Component({
  selector: 'app-multicheck-buttons',
  templateUrl: './multicheck-buttons.component.html',
  styleUrls: ['./multicheck-buttons.component.scss']

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

  @Input()
  multiple: boolean;

  @Output()
  valueChange = new EventEmitter<Record<string, boolean>>()

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

  @Input()
  icon: string


  ngOnInit() {
    console.log('multi checkboxes onInit')
  }

  showGroup() {
    const ret =  this.values &&
     Object.keys(this.values).length !== 0 &&
     this.values[0].label !==  '' // This line is required because of a bug
    console.log(JSON.stringify(this.values))
    return ret
  }

  isChecked(val: string) {
    return this.value[val] === true
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
//    console.log(JSON.stringify(this.value))
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


{
    "data": {
        "submit": false,
        "myNumber": 3
    },
    "metadata": {}
}
*/
