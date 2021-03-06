# Custom components for Formio

[Formio](https://github.com/formio/formio) and its [Angular sibling](https://github.com/formio/angular-formio) are great frameworks to create user-editable web forms. The standard components cover the usual suspects, but when you need something slightly different, you find out that creating [custom components](https://github.com/formio/angular-formio/wiki/Custom-Components-with-Angular-Elements) is half-heartedly supported. Custom components are considered  a "community feature", with [Bálint](https://github.com/merobal) as main contributor (March 2020).

I had mixed luck when trying to compile the rating component. It has cost me weeks of debugging - main problems being version conflicts and occasional infinite loops which were resolved later.

I gave up and started from scratch, with only the latest versions available: `"angular-formio": "4.6.10"` and `Angular 9.0.7`. Within one day, everthing worked - well, at least for me, your mileage may vary and you assume that ongoing formio development will introduces new issues.

The example generates inline and multiline radio buttons, yes/no buttons as a special case, large checkbox-like buttons and a multi-checkbox component.

![Custom Component](https://i.ibb.co/v41hrbN/cust.png)

I need these because the usual radio buttons are much to small and difficult to hit on tablets for patients' self-assessment.

## Custom Edit Form

I found a simple way to re-use and modify existing component editors for custom components.  In the example, I have removed the CSS text field and added a select box to display other styles such  of Bootstrap buttons.

Check files `radio-buttons-formio.ts` and `assets/radio-buttons.edit.json` for the most important changes.

![Example Danger radio buttons](https://i.ibb.co/pzNfbG5/RedRadio.png)

* Find the existing component that is similar to you new component. For radio buttons, I choose the edit form for standard radio buttons `Components.components.radio.editForm`.

* Write the stringified version of the component to the log using `console.log(JSON.stringify(Components.components.radio.editForm()))`

* Copy the string from the debugger window into a new file `assets/radio-buttons.edit.json`.  Tell me if there is an easier method to do the JSON export, but since I have to do it only once, it was good enough for me.

* Use Notepad++ with the JS-plugin to format the JSON code for humans.

* Make edits in the file. I removed the mostly-useless CSS class text field, and added a select box to select one of the [Bootstrap button styles](https://getbootstrap.com/docs/4.0/components/buttons/). The key of the field is `buttonStyle`.

```json
  {
    "components": [{
        "type": "tabs",
        "key": "tabs",
        "components": [{
  ...
              "type": "select",
              "input": true,
              "key": "buttonStyle",
              "label": "Bootstrap button color style",
              "tooltip": "<a href='https://getbootstrap.com/docs/4.0/components/buttons/'>Button style</a>",
              "weight": 400,
              "defaultValue": "primary",
              "dataSrc": "values",
              "data": {
                "values": [{
                    "label": "Primary",
                    "value": "primary"
                  }, {
                    "label": "Secondary",
                    "value": "secondary"
                ...
```

* Use `import radioButtonEditFormJson from '../../assets/radio-buttons.edit.json'` in `radio-buttons.formio.ts` to get the parsed JSON

``` typescript

function radioEditForm() {
  // You can do some additional dynamic changes by modifying JSON here
  return radioButtonEditFormJson
}
```

* Add function name without () as editForm in COMPONENT_OPTIONS.

``` typescript

const COMPONENT_OPTIONS: FormioCustomComponentInfo = {
  type: 'radiobuttons',
  selector: 'radio-buttons',
  title: 'Radio Buttons',
  group: 'basic',
  icon: 'fa fa-star',
  fieldOptions: ['label', 'values', 'key', 'hidden', 'buttonStyle'],
    editForm: radioEditForm // Use editForm from Radio buttons

```

* Add the field name `buttonStyle` and other fields you need to `fieldOptions`
* When you get an error message `Consider using '--resolveJsonModule' to import module with '.json' extension`, add the following to `compilerOptions` in `tsconfig.json`:

```json
"resolveJsonModule": true,
"esModuleInterop": true,
```

* Now you can use `buttonStyle` by importing it into the component

```typescript
  @Input()
  buttonStyle: string
```

* and in .html

```html
class="btn-outline-{{buttonStyle}}
```

### A Custom Components Form

When you want to present a recommended subselection of components for users, you can create a custom form. See  [app.component.ts](https://github.com/dmenne/custom-radio/blob/master/src/app/app.component.ts) and [app.component.html](https://github.com/dmenne/custom-radio/blob/master/src/app/app.component.html) for quick-and-dirty solution.

![Custom Components Form](https://i.ibb.co/19k5715/Custom-Radio.png)

Thanks to [@travist](https://github.com/formio/angular-formio/issues/544).

### Cypress E2E Test

Some Cypress tests have been added. Use `ng e2e` to start;  have some coffee ready, the first start may need more than 1 minute.

### Fortawesomes

Using [fortawesome](https://www.npmjs.com/package/@fortawesome/angular-fontawesome) for access to  version 5.x fontawesome now. [Workaround](https://github.com/formio/angular-formio/issues/547) for missing icons. Future versions of formio will support version 5.x icons.

### Custom Components in angular-formio still buggy

`onInit` of the component is called 6 times when a key in any editor is pressed. Reported [as #507](<https://github.com/formio/angular-formio/issues/507>).

### Infinite loops

Here is a [reproducable case](https://github.com/dmenne/custom-radio/blob/a4a2bbb331e55f2aa2b3023a5f3fb983e3078f20/cypress/integration/spec.ts#L83-L87) that generates an infinite loop in the browser:
