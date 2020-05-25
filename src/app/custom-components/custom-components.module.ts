import { NgModule, Injector } from '@angular/core';
import { CommonModule } from '@angular/common';
import { registerRadioButtonsComponent } from './radio-buttons/radio-buttons.formio'
import { registerCheckboxButtonComponent } from './checkbox-button/checkbox-button.formio'
import { registerYesNoButtonsComponent} from './yes-no-buttons/yes-no-buttons.formio'
import { registerMulticheckButtonsComponent} from './multicheck-buttons/multicheck-buttons.formio'
import { YesNoButtonsComponent } from './yes-no-buttons/yes-no-buttons.component'
import { CheckboxButtonComponent } from './checkbox-button/checkbox-button.component'
import { RadioButtonsComponent } from './radio-buttons/radio-buttons.component'
import { MulticheckButtonsComponent } from './multicheck-buttons/multicheck-buttons.component'

@NgModule({
  declarations: [
    RadioButtonsComponent,
    CheckboxButtonComponent,
    YesNoButtonsComponent,
    MulticheckButtonsComponent
  ],
  imports: [
    CommonModule
  ],
  entryComponents: [
    RadioButtonsComponent,
    CheckboxButtonComponent,
    YesNoButtonsComponent,
    MulticheckButtonsComponent
  ]
})
export class CustomComponentsModule {
  constructor(injector: Injector) {
    registerRadioButtonsComponent(injector);
    registerCheckboxButtonComponent(injector);
    registerYesNoButtonsComponent(injector);
    registerMulticheckButtonsComponent(injector);
  }
 }
