import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, NgForm, Validators, ReactiveFormsModule, FormControl, FormControlName} from '@angular/forms';
import {User} from '../_models';

@Component({
  selector: 'app-withdrawal-editor',
  templateUrl: './withdrawal-editor.component.html',
  styleUrls: ['./withdrawal-editor.component.css']
})
export class WithdrawalEditorComponent implements OnInit {
  user: FormGroup;
  constructor(private fb: FormBuilder) {}
    // To initialize FormGroup
  ngOnInit() {
    this.user = this.fb.group ( {
      firstName: [null, Validators.required],
      lastName: [null, Validators.required],
      idNumber: [null, Validators.compose ( [Validators.required, Validators.minLength ( 13 ), Validators.maxLength ( 14 )] )],
      email: [null, Validators.compose ( [Validators.required, Validators.email] )],
      amountToWithdraw: [null, Validators.required],
      isAccepted: [null],
      token: ['fake-jwt-token']
    } );
  } );


// On Change event of Toggle Button
  onChange(event: any); {
    if (event.checked === true) {
      this.isAccepted = 1;
    } else {
      this.IsAccepted = 0;
    }
  }


