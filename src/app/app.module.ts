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
import { CheckboxButtonsComponent } from './checkbox-buttons/checkbox-buttons.component'
import { registerCheckboxButtonsComponent } from './checkbox-buttons/checkbox-buttons.formio';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    RadioButtonsComponent,
    CheckboxButtonsComponent
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
    CheckboxButtonsComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(injector: Injector) {
    registerRadioButtonsComponent(injector)
    registerCheckboxButtonsComponent(injector)
  }
}
