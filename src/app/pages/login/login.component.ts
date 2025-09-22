import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormControl } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
   selector: 'app-login',
   standalone: true,
   imports: [
      ReactiveFormsModule,
      MatFormFieldModule,
      MatInputModule,
      MatButtonModule
   ],
   templateUrl: './login.component.html',
   styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
   loginForm!: FormGroup;

   constructor(private readonly formBuilder: FormBuilder) { }

   get usernameControl(): FormControl {
      return this.loginForm.get('username') as FormControl;
   }

   get passwordControl(): FormControl {
      return this.loginForm.get('password') as FormControl;
   }

   ngOnInit() {
      this.createLoginForm();
   }

   createLoginForm(): void {
      this.loginForm = this.formBuilder.group({
         username: ['', Validators.required],
         password: ['', Validators.required]
      });
   }

   onSubmit(): void {
      if (this.loginForm.invalid) {
         this.loginForm.markAllAsTouched();
         return;
      }
   }
}
