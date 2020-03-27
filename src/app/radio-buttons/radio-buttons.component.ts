import { Component,  EventEmitter, Input, Output, OnInit, HostBinding} from '@angular/core'
import { FormioCustomComponent } from 'angular-formio'

@Component({
  selector: 'app-radio-buttons',
  templateUrl: './radio-buttons.component.html',
  styleUrls: ['./radio-buttons.component.scss']

})

export class RadioButtonsComponent  implements FormioCustomComponent<string>, OnInit {

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
  }


  showGroup() {
    return  !this.hidden && this.values && ((this.values[0].value) !== '');
  }

  isActive(val: string) {
    const ret = this.values && (val === this.values[0].value)
    return ret;
  }


  buttonClass(val: string) {
    const btn =  'btn-outline-'  + this.buttonStyle + ' ' + (this.isActive(val) ? 'active' : '')
    const ret =  'btn ' + btn + ' mr-1  mb-2' + (this.inline ? ' btn-group-rounded' : '')
    console.log(ret)
    return ret
  }


  onClick(val: string) {
//    console.log(val)
//    this.value = val;
    // this.valueChange.emit(val);
  }

}
