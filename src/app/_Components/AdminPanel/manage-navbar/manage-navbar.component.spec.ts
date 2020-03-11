import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageNavbarComponent } from './manage-navbar.component';

describe('ManageNavbarComponent', () => {
  let component: ManageNavbarComponent;
  let fixture: ComponentFixture<ManageNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
