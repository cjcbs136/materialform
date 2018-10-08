import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WithdrawalEditorComponent } from './withdrawal-editor.component';

describe('WithdrawalEditorComponent', () => {
  let component: WithdrawalEditorComponent;
  let fixture: ComponentFixture<WithdrawalEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WithdrawalEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WithdrawalEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
