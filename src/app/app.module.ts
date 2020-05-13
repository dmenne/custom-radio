// Modules
import { NgModule, Injector } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { CommonModule } from '@angular/common'
import { AppConfig } from '../formio-config'

// Components
import { AppComponent } from './app.component'
import { ButtonsModule } from 'ngx-bootstrap/buttons';

// Formio
import { FormioModule, FormioAppConfig, Components} from 'angular-formio'
import { RadioButtonsComponent } from './radio-buttons/radio-buttons.component'
import { registerRadioButtonsComponent } from './radio-buttons/radio-buttons.formio';
import { CheckboxButtonComponent } from './checkbox-button/checkbox-button.component'
import { registerCheckboxButtonComponent } from './checkbox-button/checkbox-button.formio';

import { CheckboxButtonsComponent } from './checkbox-buttons/checkbox-buttons.component'
import { registerCheckboxButtonsComponent } from './checkbox-buttons/checkbox-buttons.formio';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { YesNoButtonsComponent } from './yes-no-buttons/yes-no-buttons.component';
import { registerYesNoButtonsComponent } from './yes-no-buttons/yes-no-buttons.formio';

@NgModule({
  declarations: [
    AppComponent,
    RadioButtonsComponent,
    CheckboxButtonComponent,
    CheckboxButtonsComponent,
    YesNoButtonsComponent
  ],
  imports: [
    FormioModule,
    BrowserModule,
    CommonModule,
    ButtonsModule.forRoot(),
    BrowserAnimationsModule,
  ],
  providers: [
    {provide: FormioAppConfig, useValue: AppConfig}
  ],
  entryComponents: [
    RadioButtonsComponent,
    CheckboxButtonComponent,
    CheckboxButtonsComponent,
    YesNoButtonsComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(injector: Injector) {
    registerRadioButtonsComponent(injector)
    registerYesNoButtonsComponent(injector)
    registerCheckboxButtonComponent(injector)
    registerCheckboxButtonsComponent(injector)

  }
}
