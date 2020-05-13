import { Injector } from '@angular/core'
import {
  FormioCustomComponentInfo,
  registerCustomFormioComponent,
  Components
} from 'angular-formio'
import { CheckboxButtonsComponent } from './checkbox-buttons.component'
import checkboxButtonsEditFormJson from '../../assets/checkbox-buttons.edit.json'

function checkboxButtonsEditForm() {
  // Base form is created from
  // console.log(JSON.stringify(Components.components.selectboxes.editForm()))
  // Get the output from the console, format it with Notepad++ Tools/JSTool/JSFormat
  // and store it as a file in ../../assets.
  // Make changes to your Edit form
  // Before deployment, compact JSON file with Notepad++ Tools/JSToool/JSMin
  return checkboxButtonsEditFormJson
}

const COMPONENT_OPTIONS: FormioCustomComponentInfo = {
  type: 'checkboxbuttons', // custom type. Formio will identify the field with this type.
  selector: 'checkbox-buttons', // custom selector. Angular Elements will create a custom html tag with this selector
  title: 'Multi Checkboxes', // Title of the component
  group: 'basic', // Build Group
  icon: 'check-circle', // Icon
  fieldOptions: ['label', 'values', 'key', 'hidden', 'buttonStyle', 'inline'],
  editForm: checkboxButtonsEditForm, // Use editForm from Radio buttons
  //  template: 'input', // Optional: define a template for the element. Default: input
//  changeEvent: 'valueChange', // Optional: define the changeEvent when the formio updates the value in the state. Default: 'valueChange',
//  documentation: '', // Optional: define the documentation of the field
//  weight: 0, // Optional: define the weight in the builder group
//  schema: {}, // Optional: define extra default schema for the field
//  extraValidators: [], // Optional: define extra validators  for the field
//  emptyValue: '' // Optional: the emptyValue of the field
}

export function registerCheckboxButtonsComponent(injector: Injector) {
  registerCustomFormioComponent(COMPONENT_OPTIONS, CheckboxButtonsComponent, injector)
}
