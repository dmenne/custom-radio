import { Injector } from '@angular/core'
import {
  FormioCustomComponentInfo,
  registerCustomFormioComponent,
  Components
} from 'angular-formio'
import { YesNoButtonsComponent } from './yes-no-buttons.component'
import yesnoButtonEditFormJson from '../../assets/yes-no-buttons.edit.json'

function radioEditForm() {
  // Base form is created from
  // console.log(JSON.stringify(Components.components.radio.editForm()))
  // Get the output from the console, format it with Notepad++ Tools/JSTool/JSFormat
  // and store it as a file in ../../assets.
  // Make changes to your Edit form
  // Before deployment, compact JSON file with Notepad++ Tools/JSToool/JSMin
  return yesnoButtonEditFormJson
}

const COMPONENT_OPTIONS: FormioCustomComponentInfo = {
  type: 'yesnobuttons', // custom type. Formio will identify the field with this type.
  selector: 'yes-no-buttons', // custom selector. Angular Elements will create a custom html tag with this selector
  title: 'Yes/No Buttons', // Title of the component
  group: 'basic', // Build Group
  icon: 'check', // Icon
  fieldOptions: ['label', 'values', 'key', 'hidden', 'buttonStyle', 'inline'],
  editForm: radioEditForm, // Use editForm from Radio buttons
  //  template: 'input', // Optional: define a template for the element. Default: input
//  changeEvent: 'valueChange', // Optional: define the changeEvent when the formio updates the value in the state. Default: 'valueChange',
//  documentation: '', // Optional: define the documentation of the field
//weight: 0, // Optional: define the weight in the builder group
//  schema: {}, // Optional: define extra default schema for the field
//  extraValidators: [], // Optional: define extra validators  for the field
//  emptyValue: '' // Optional: the emptyValue of the field
}

export function registerYesNoButtonsComponent(injector: Injector) {
  registerCustomFormioComponent(COMPONENT_OPTIONS, YesNoButtonsComponent, injector)
}
