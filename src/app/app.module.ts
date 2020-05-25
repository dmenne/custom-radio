// Modules
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { CommonModule } from '@angular/common'
import { AppConfig } from '../formio-config'

// Components
import { AppComponent } from './app.component'
import { ButtonsModule } from 'ngx-bootstrap/buttons';

// Formio
import { FormioModule, FormioAppConfig, Components} from 'angular-formio'


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomComponentsModule } from './custom-components/custom-components.module'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    FormioModule,
    BrowserModule,
    CommonModule,
    CustomComponentsModule,
    ButtonsModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [
    {provide: FormioAppConfig, useValue: AppConfig}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
