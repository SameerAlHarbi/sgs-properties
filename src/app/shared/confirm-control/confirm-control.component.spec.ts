import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmControlComponent } from './confirm-control.component';

describe('ConfirmControlComponent', () => {
  let component: ConfirmControlComponent;
  let fixture: ComponentFixture<ConfirmControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmControlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
