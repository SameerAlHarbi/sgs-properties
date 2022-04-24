import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PotoComponent } from './poto.component';

describe('PotoComponent', () => {
  let component: PotoComponent;
  let fixture: ComponentFixture<PotoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PotoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
