import { Injector } from '@angular/core'
import {
  FormioCustomComponentInfo,
  registerCustomFormioComponent,
  Components
} from 'angular-formio'
import { CheckboxButtonComponent } from './checkbox-button.component'
import checkboxButtonEditFormJson from '../../assets/checkbox-button.edit.json'

function checkboxEditForm() {
  // Base form is created from
  // console.log(JSON.stringify(Components.components.checkbox.editForm()))
  // Get the output from the console, format it with Notepad++ Tools/JSTool/JSFormat
  // and store it as a file in ../../assets.
  // Make changes to your Edit form
  // Before deployment, compact JSON file with Notepad++ Tools/JSToool/JSMin
  // return Components.components.checkbox.editForm()
  return checkboxButtonEditFormJson
}

const COMPONENT_OPTIONS: FormioCustomComponentInfo = {
  type: 'checkboxbutton', // custom type. Formio will identify the field with this type.
  selector: 'checkbox-button', // custom selector. Angular Elements will create a custom html tag with this selector
  title: 'Checkbox Button', // Title of the component
  group: 'basic', // Build Group
  icon: 'list-alt', // Icon
  fieldOptions: ['label', 'key', 'hidden', 'buttonStyle', 'hideLabel', 'icon'],
  editForm: checkboxEditForm, // Use editForm from checkbox button
  //  template: 'input', // Optional: define a template for the element. Default: input
//  changeEvent: 'valueChange', // Optional: define the changeEvent when the formio updates the value in the state. Default: 'valueChange',
//  documentation: '', // Optional: define the documentation of the field
//  weight: 0, // Optional: define the weight in the builder group
//  schema: {}, // Optional: define extra default schema for the field
//  extraValidators: [], // Optional: define extra validators  for the field
//  emptyValue: '' // Optional: the emptyValue of the field
}

export function registerCheckboxButtonComponent(injector: Injector) {
  registerCustomFormioComponent(COMPONENT_OPTIONS, CheckboxButtonComponent, injector)
}
