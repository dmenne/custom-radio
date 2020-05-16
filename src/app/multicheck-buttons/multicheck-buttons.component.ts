import { Component, EventEmitter, Input, OnInit, Output, ɵisListLikeIterable } from '@angular/core'
import { FormioCustomComponent } from 'angular-formio'
import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes'

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
    return true
//    return  !this.hidden && this.values && ((this.values[0].value) !== '');
  }

  isChecked(val: string) {
    return this.value && (val === 'sd')
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
