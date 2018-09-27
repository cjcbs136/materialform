import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormsModule, ReactiveFormsModule, NgForm, FormArray} from '@angular/forms';

@Component ( {
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
} )

export class AppComponent {

  constructor(private fb: FormBuilder) {


    // To initialize FormGroup
    this.withForm = fb.group ( {
      'FirstName': [null, Validators.required],
      'LastName': [null, Validators.required],
      'idNumber': [null, Validators.compose ( [Validators.required, Validators.minLength ( 13 ), Validators.maxLength ( 14 )] )],
      'Email': [null, Validators.compose ( [Validators.required, Validators.email] )],
      'AmountToWithdraw': [null, Validators.required],
      'IsAccepted': [null],
      'token': 'fake-jwt-token'
    } );
    this.title = 'app';
  }

  withForm: FormGroup;
  FirstName = '';
  LastName = '';
  Email = '';
  idNumber = '';
  AmountToWithdraw = '';
  IsAccepted = 0;
  private title: string;


  // On Change event of Toggle Button
  onChange(event: any) {
    if (event.checked === true) {
      this.IsAccepted = 1;
    } else {
      this.IsAccepted = 0;
    }
  }

  onFormSubmit(withForm: NgForm) {
    if (this.withForm.valid) {
      console.log('Form Submitted!' + this.makeid());
    console.log ( withForm );
    this.withForm.markAsUntouched();
    this.withForm.markAsPristine();
    this.withForm.reset();
    this.withForm.clearValidators();
  }
  }
    makeid() {
    let text = '';
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (let i = 0; i < 5; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    return text;
  }

}
