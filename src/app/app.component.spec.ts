import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
   beforeEach(async () => {
      await TestBed.configureTestingModule({
         imports: [AppComponent],
      }).compileComponents();
   });

   it('should create the app component', () => {
      const fixture = TestBed.createComponent(AppComponent);
      const appComponent = fixture.componentInstance;
      expect(appComponent).toBeTruthy();
   });
});
