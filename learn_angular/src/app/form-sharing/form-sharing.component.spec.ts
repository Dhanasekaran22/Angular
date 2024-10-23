import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSharingComponent } from './form-sharing.component';

describe('FormSharingComponent', () => {
  let component: FormSharingComponent;
  let fixture: ComponentFixture<FormSharingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormSharingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormSharingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
