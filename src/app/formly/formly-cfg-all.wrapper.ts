import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { FieldWrapper } from '@ngx-formly/core';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'formly-wrapper-form-field-cfg-all',
  template:  `
 
<div class="border border-secondary p-3">

  <small>[formly-wrapper-form-field-cfg-all]</small>
  {{key}} <button type="button" (click)="removeItem(key, model, form, fields, field)"
class="btn btn-warning submit-button">Remove FIELD</button>
  <ng-template #fieldComponent></ng-template>
  
</div>

`
})
export class FormlyWrapperFormFieldCfgAll extends FieldWrapper {

  @ViewChild('fieldComponent', { read: ViewContainerRef }) fieldComponent: ViewContainerRef;

   removeItem(k: any, m: any, f: any, ff: any, fff: any) {

    console.log(this.fieldComponent);

    console.log('FormlyWrapperFormFieldCfgAll:removeItem',k);
    console.warn('model',m);
    console.warn('form',f);
    console.warn('fields',ff);
    console.warn('field',fff);
    console.log(this.model);
    // https://stackblitz.com/edit/ngx-formly-ui-material-i9sndp
    this.model[k] = undefined;
    delete this.model[k];
    this.model = JSON.parse(JSON.stringify(this.model));

    console.log(this.model);
    console.log(this.fields);
    console.log(this.form);

    this.form.removeControl(k);
    const parentField = fff.parent;
    console.log(parentField.fields);
    /*
    this.formBuilder.buildForm(
      parentField.formControl as FormGroup,
      parentField.fieldGroup,
      parentField.model,
      parentField.options,
    );
    */

    // this.propagateChange(this.counterValue);
    
  }
}

