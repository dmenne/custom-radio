// Modules
import { NgModule, Injector } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { CommonModule } from '@angular/common'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'

// Components
import { AppComponent } from './app.component'

// Formio
import { FormioModule} from 'angular-formio'
import { RadioButtonsComponent } from './radio-buttons/radio-buttons.component'
import { registerRadioButtonsComponent } from './radio-buttons/radio-buttons.formio';
import { CheckboxButtonsComponent } from './checkbox-buttons/checkbox-buttons.component'
import { registerCheckboxButtonsComponent } from './checkbox-buttons/checkbox-buttons.formio';

@NgModule({
  declarations: [
    AppComponent,
    RadioButtonsComponent,
    CheckboxButtonsComponent
  ],
  imports: [
    FormioModule,
    NgbModule,
    BrowserModule,
    CommonModule,
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
