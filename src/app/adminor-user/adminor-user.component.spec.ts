import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminorUserComponent } from './adminor-user.component';

describe('AdminorUserComponent', () => {
  let component: AdminorUserComponent;
  let fixture: ComponentFixture<AdminorUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminorUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminorUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
