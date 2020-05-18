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

import { RadioButtonsComponent } from './custom-components/radio-buttons/radio-buttons.component'
import { registerRadioButtonsComponent } from './custom-components/radio-buttons/radio-buttons.formio';

import { CheckboxButtonComponent } from './custom-components/checkbox-button/checkbox-button.component'
import { registerCheckboxButtonComponent } from './custom-components/checkbox-button/checkbox-button.formio';

import { MulticheckButtonsComponent } from './custom-components/multicheck-buttons/multicheck-buttons.component'
import { registerMulticheckButtonsComponent } from './custom-components/multicheck-buttons/multicheck-buttons.formio';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { YesNoButtonsComponent } from './custom-components/yes-no-buttons/yes-no-buttons.component';
import { registerYesNoButtonsComponent } from './custom-components/yes-no-buttons/yes-no-buttons.formio';

@NgModule({
  declarations: [
    AppComponent,
    RadioButtonsComponent,
    CheckboxButtonComponent,
    MulticheckButtonsComponent,
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
    MulticheckButtonsComponent,
    YesNoButtonsComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(injector: Injector) {
    registerRadioButtonsComponent(injector)
    registerYesNoButtonsComponent(injector)
    registerCheckboxButtonComponent(injector)
    registerMulticheckButtonsComponent(injector)

  }
}
