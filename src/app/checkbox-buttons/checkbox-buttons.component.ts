import { Component,  EventEmitter, Input, Output, OnInit, HostBinding} from '@angular/core'
import { FormioCustomComponent } from 'angular-formio'

@Component({
  selector: 'app-radio-buttons',
  templateUrl: './checkbox-buttons.component.html',
  styleUrls: ['./checkbox-buttons.component.scss']

})

export class CheckboxButtonsComponent  implements FormioCustomComponent<string>, OnInit {

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
    // BUG: This function is called 6 times when the editor is openend
    console.log('ngOnInit')
  }

  showGroup() {
    return  !this.hidden && this.values && ((this.values[0].value) !== '');
  }
  onClick(val: string) {
    console.log(val)
    this.value = val;
    this.valueChange.emit(val);
  }

}
