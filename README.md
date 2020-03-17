# Radio-buttons: A custom component for Formio

[Formio](https://github.com/formio/formio) and its [Angular sibling](https://github.com/formio/angular-formio) are great frameworks to create user-editable web forms. The standard components cover the usual suspects, but when you need something slightly different, you find out that creating [custom components](https://github.com/formio/angular-formio/wiki/Custom-Components-with-Angular-Elements) is only half-heartedly supported. It does not make money, so on most question you get a "paid support is available on request". Custom components are considered  a "community feature", with [Bálint](https://github.com/merobal) as main contributor (March 2020). He has updated the documentation and contributed a [star-rating](https://github.com/merobal/angular-formio-custom-demo)  custom component - thanks. 

I had mixed luck when trying to compile the rating component, and using the concept in my own project. I cost me weeks of debugging - main problems being version conflicts and occasional infinite loops.

I gave up and started from scratch, with only the latest versions available: `"angular-formio": "~4.6.9"` and `Angular 9.0.6`. Within one day, everthing worked - well, at least for me, your mileage may vary and you can be sure that formioXX introduces will introduces new issues.

The example generates a radio button group with [real bootstrap buttons](https://ng-bootstrap.github.io/#/components/buttons/examples#radioreactive)

![Bootstrap radio buttons](https://i.ibb.co/tHbnnTn/cust.png)

I created these because the usual radio buttons are much to small and difficult to hit on tablets for patients' self-assessment.

### Untested

I have not tested save/restore yet, the focus was on editing and parameter passing.

### Still buggy?

I am surprised that `onInit` of the component is called 6 times when I start the editor.

