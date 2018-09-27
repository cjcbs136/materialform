import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { MatButtonModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatTableModule,
  MatFormFieldModule,
  MatInputModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatRadioModule,
  MatSelectModule,
  MatOptionModule,
  MatSlideToggleModule} from '@angular/material';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ReactiveFormsModule} from '@angular/forms';

describe
('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
        ReactiveFormsModule,
        BrowserAnimationsModule,
        MatButtonModule,
          MatMenuModule,
          MatToolbarModule,
          MatIconModule,
          MatCardModule,
          MatTableModule,
          MatFormFieldModule,
          MatInputModule,
          MatDatepickerModule,
          MatNativeDateModule,
          MatRadioModule,
          MatSelectModule,
          MatOptionModule,
          MatSlideToggleModule
      ]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toContain('app');
  }));
  it('should render title in a h2 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h2').textContent).toContain('Fill in the following form');
  }));
    it ( '#clicked() should toggle #isOn', () => {
      const fixture = TestBed.createComponent ( AppComponent );
      fixture.detectChanges ();
      const compiled = fixture.debugElement.nativeElement;
      const slider = MatSlideToggleModule;
      console.log ( 'before ' + slider.prototype );

    });
});
