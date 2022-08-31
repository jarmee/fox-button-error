import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'fox-button-error';

  formGroup: FormGroup;

  submittedValue: { value: string } | null = null;

  constructor(private _formBuilder: FormBuilder) {
    this.formGroup = this._formBuilder.group({
      value: '',
    });
  }

  onSubmit() {
    this.submittedValue = this.formGroup.value;
    this.formGroup.reset();
  }
}
