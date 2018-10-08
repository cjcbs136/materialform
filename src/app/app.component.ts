import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from './_helpers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  user: FormGroup;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService) {

    this.user = new FormGroup({
      firstName: new FormControl(),
      lastName: new FormControl(),
      idNumber: new FormControl(),
      email: new FormControl(),
      amountToWithdraw: new FormControl(),
      isAccepted: new FormControl()
    });

    this.createForm();
  }

  createForm() {
    this.user = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      idNumber: ['', Validators.required],
      email: ['', Validators.required],
      amountW: ['', Validators.required],
      isAccepted: ['', Validators.requiredTrue]

    });
  }
}
// convenience getter for easy access to form fields
//   get f() {
//     return this.withForm.controls;
//   }
//
//   // On Change event of Toggle Button
//   onChange(event: any) {
//     if (event.checked === true) {
//       this.isAccepted = 1;
//     } else {
//       this.isAccepted = 0;
//     }
//   }
//
//   onFormSubmit(form: NgForm) {
//     console.log ( form );
//   }
// }
