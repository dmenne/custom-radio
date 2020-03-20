import { Injector } from '@angular/core'
import { FormioCustomComponentInfo, registerCustomFormioComponent, Components } from 'angular-formio'
import { PrettyCheckboxComponent } from './pretty-checkbox'

const COMPONENT_OPTIONS: FormioCustomComponentInfo = {
  type: 'prettycheckbox', // custom type. Formio will identify the field with this type.
  selector: 'pretty-checkbox',
  title: 'Pretty Checkbox', // Title of the component
  group: 'basic', // Build Group
  icon: 'fa fa-star', // Icon
  fieldOptions: ['label', 'values', 'key', 'hidden'],
  editForm: Components.components.checkbox.editForm, // Use editForm from Checkbox
  //  template: 'input', // Optional: define a template for the element. Default: input
//  changeEvent: 'valueChange', // Optional: define the changeEvent when the formio updates the value in the state. Default: 'valueChange',
//  documentation: '', // Optional: define the documentation of the field
//  weight: 0, // Optional: define the weight in the builder group
//  schema: {}, // Optional: define extra default schema for the field
//  extraValidators: [], // Optional: define extra validators  for the field
//  emptyValue: '' // Optional: the emptyValue of the field
}

export function registerPrettyCheckboxComponent(injector: Injector) {
  registerCustomFormioComponent(COMPONENT_OPTIONS, PrettyCheckboxComponent, injector)
}
