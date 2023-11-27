import { Component } from '@angular/core';

import {
  FormBuilder,
  FormGroup,
  FormsModule,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';

import { ApiService } from '../../services/api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form-test-adonis',
  templateUrl: './form-test-adonis.component.html',
  styleUrls: ['./form-test-adonis.component.css'],
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule,CommonModule],
})
export class FormTestAdonisComponent {
  myForm: FormGroup;
  usersList: any[] = [];
  err: any;
  rep :any;

  constructor(private fb: FormBuilder, private apiService: ApiService) {
    this.myForm = this.fb.group({
      email: ['test@gmail.com', [Validators.required, Validators.email]],
      password: ['azertyuiop', [Validators.required, Validators.minLength(8)]],
    });
  }

  login() {
    if (this.myForm.valid) {
      this.apiService.login(this.myForm).subscribe({
        next: value => {console.log('next:', value), this.rep = value},
        error: err => console.log('error:', err),
        complete: () => console.log('the end'),
      });
    }
    this.usersList = []
    this.err = ""
  }

  logout() {

    this.apiService.logout().subscribe({
      next: value => {console.log('next:', value),this.rep = value},
      error: err => console.log('error:', err),
      complete: () => console.log('the end'),
    });

    this.usersList = []
    this.err = ""
  }

  users() {
    const usersList = this.apiService.users();

    usersList.subscribe({
      next: (value) => {
        console.log('next:', value), (this.usersList = value);
      },
      error: (err) => {
        console.log('error:', err), (this.err = err);
      },
      complete: () => console.log('the end'),
    });
  }
}
