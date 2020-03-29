// Modules
import { NgModule, Injector } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { CommonModule } from '@angular/common'

// Components
import { AppComponent } from './app.component'
import { ButtonsModule } from 'ngx-bootstrap/buttons';

// Formio
import { FormioModule} from 'angular-formio'
import { RadioButtonsComponent } from './radio-buttons/radio-buttons.component'
import { registerRadioButtonsComponent } from './radio-buttons/radio-buttons.formio';
import { CheckboxButtonComponent } from './checkbox-button/checkbox-button.component'
import { registerCheckboxButtonComponent } from './checkbox-button/checkbox-button.formio';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { YesNoButtonsComponent } from './yes-no-buttons/yes-no-buttons.component';
import { registerYesNoButtonsComponent } from './yes-no-buttons/yes-no-buttons.formio';

@NgModule({
  declarations: [
    AppComponent,
    RadioButtonsComponent,
    CheckboxButtonComponent,
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
  ],
  entryComponents: [
    RadioButtonsComponent,
    CheckboxButtonComponent,
    YesNoButtonsComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(injector: Injector) {
    registerRadioButtonsComponent(injector)
    registerYesNoButtonsComponent(injector)
    registerCheckboxButtonComponent(injector)

  }
}
