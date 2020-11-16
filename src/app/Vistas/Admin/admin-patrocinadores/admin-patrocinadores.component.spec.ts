import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPatrocinadoresComponent } from './admin-patrocinadores.component';

describe('AdminPatrocinadoresComponent', () => {
  let component: AdminPatrocinadoresComponent;
  let fixture: ComponentFixture<AdminPatrocinadoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminPatrocinadoresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPatrocinadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
