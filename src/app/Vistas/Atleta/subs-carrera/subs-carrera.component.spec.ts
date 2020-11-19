import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubsCarreraComponent } from './subs-carrera.component';

describe('SubsCarreraComponent', () => {
  let component: SubsCarreraComponent;
  let fixture: ComponentFixture<SubsCarreraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubsCarreraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubsCarreraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
