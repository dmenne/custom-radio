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
    // console.log("onInit")
  //  this.value = false
    this.hideLabel = true
  }

  faIcon(){
    return 'fa-' + this.icon
  }
  buttonClass() {
    const btn = 'btn-' + (this.value ? '' : 'outline-' ) + this.buttonStyle
    console.log(btn)
    return btn
  }


  toggleValue() {
    this.value = !this.value;
    console.log(this.value)
    this.valueChange.emit(this.value);
  }

}
