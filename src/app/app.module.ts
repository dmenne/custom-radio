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
import { registerRadioButtonsComponent } from './radio-buttons/radio-buttons.formio'

@NgModule({
  declarations: [
    AppComponent,
    RadioButtonsComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormioModule,
    NgbModule,
  ],
  providers: [
  ],
  entryComponents: [
    RadioButtonsComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(injector: Injector) {
    registerRadioButtonsComponent(injector)
  }
}
