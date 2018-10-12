import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserService} from "../_helpers";
import {ActivatedRoute, Router} from '@angular/router';
import {first} from "rxjs/operators";
import {User} from "../_models";

@Component({
  selector: 'app-withdrawal-editor',
  templateUrl: './withdrawal-editor.component.html',
  styleUrls: ['./withdrawal-editor.component.css']})

  export class WithdrawalEditorComponent implements OnInit {
  @Input () user: User[] = [];


  loading = false;
  submitted = false;
  isAccepted = false;

  constructor(
    public createUser: FormGroup,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService,) {
    this.user = JSON.parse ( localStorage.getItem ( 'currentUser' ) );
  }

  ngOnInit() {
    this.createUser = this.fb.group ( {
      id: [null, Validators.required],
      idNumber: [null, Validators.compose ( [Validators.required, Validators.minLength ( 13 ), Validators.maxLength ( 14 )] )],
      email: [null, Validators.compose ( [Validators.required, Validators.email] )],
      firstName: [null, Validators.required],
      lastName: [null, Validators.required],
      amountToWithdraw: [null, Validators.required],
      isAccepted: [],
      token: ['fake-jwt-token']
    } );
  };

  // On Change event of Toggle Button
  onChange(event: any) {
    if (event.checked === true) {
      this.isAccepted = true;
    } else {
      this.isAccepted = false;
    }
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.createUser.controls;
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.createUser.invalid) {
      return;
    }


    this.loading = true;
    this.userService.addUser ( this.createUser.value )
      .pipe ( first () )
      .subscribe (
        data => {
          this.router.navigate ( ['withdrawal-editor',] );
          error => {
            this.loading = false;
          }
        } );
  }
}


