import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubAdminManagentComponent } from './sub-admin-managent.component';

describe('SubAdminManagentComponent', () => {
  let component: SubAdminManagentComponent;
  let fixture: ComponentFixture<SubAdminManagentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubAdminManagentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubAdminManagentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
