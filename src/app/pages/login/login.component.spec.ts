import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
   let component: LoginComponent;
   let fixture: ComponentFixture<LoginComponent>;

   beforeEach(async () => {
      await TestBed.configureTestingModule({
         imports: [LoginComponent]
      })
         .compileComponents();

      fixture = TestBed.createComponent(LoginComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
   });

   it('should create', () => {
      expect(component).toBeTruthy();
   });

   describe('#ngOnInit', () => {
      it('should call createLoginForm', () => {
         spyOn(component, 'createLoginForm');

         component.ngOnInit();

         expect(component.createLoginForm).toHaveBeenCalled();
      });
   });

   describe('#createLoginForm', () => {
      it('should create a form group with username and password controls', () => {
         component.createLoginForm();

         expect(component.loginForm.contains('username')).toBeTrue();
         expect(component.loginForm.contains('password')).toBeTrue();
      });

      it('should make username control required', () => {
         component.createLoginForm();
         const usernameControl = component.loginForm.get('username');

         usernameControl?.setValue('');
         expect(usernameControl?.valid).toBeFalse();
         expect(usernameControl?.errors?.['required']).toBeTrue();
      });

      it('should make password control required', () => {
         component.createLoginForm();
         const passwordControl = component.loginForm.get('password');

         passwordControl?.setValue('');
         expect(passwordControl?.valid).toBeFalse();
         expect(passwordControl?.errors?.['required']).toBeTrue();
      });

      it('should make form valid when username and password are provided', () => {
         component.createLoginForm();
         component.loginForm.setValue({ username: 'testUser', password: 'secret123' });

         expect(component.loginForm.valid).toBeTrue();
      });
   });

   describe('#onSubmit', () => {
      beforeEach(() => {
         spyOn(component.loginForm, 'markAllAsTouched');
      });
      it('should not call markAllAsTouched on login form if form is valid', () => {
         component.usernameControl.setValue('username');
         component.passwordControl.setValue('password');

         component.onSubmit();

         expect(component.loginForm.markAllAsTouched).not.toHaveBeenCalled();
      });

      it('should mark all fields as touched if form is invalid', () => {
         component.usernameControl.setValue(null);
         component.usernameControl.setErrors({ required: true });

         component.onSubmit();

         expect(component.loginForm.markAllAsTouched).toHaveBeenCalled();
      });
   });
});
