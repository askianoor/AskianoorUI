import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageExperienceComponent } from './manage-experience.component';

describe('ManageExperienceComponent', () => {
  let component: ManageExperienceComponent;
  let fixture: ComponentFixture<ManageExperienceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageExperienceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
