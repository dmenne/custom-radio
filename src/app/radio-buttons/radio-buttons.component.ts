import { Component,  EventEmitter, Input, Output, OnInit} from '@angular/core'
import { FormGroup } from '@angular/forms';
import { FormioCustomComponent } from 'angular-formio'

@Component({
  selector: 'app-radio-buttons',
  templateUrl: './radio-buttons.component.html',
  styleUrls: ['./radio-buttons.component.scss']

})

export class RadioButtonsComponent  implements FormioCustomComponent<string>, OnInit {
  public radioGroupForm: FormGroup;
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


  ngOnInit() {
    // BUG: This function is called 6 times when the editor is openend
    console.log('ngOnInit')
  }

  onClick(val: string) {
    console.log(val)
    this.value = val;
    this.valueChange.emit(val);
  }

}
