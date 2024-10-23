import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSharingComponent } from './list-sharing.component';

describe('ListSharingComponent', () => {
  let component: ListSharingComponent;
  let fixture: ComponentFixture<ListSharingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListSharingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListSharingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
