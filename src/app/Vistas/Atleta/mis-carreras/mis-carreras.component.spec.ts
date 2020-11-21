import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MisCarrerasComponent } from './mis-carreras.component';

describe('MisCarrerasComponent', () => {
  let component: MisCarrerasComponent;
  let fixture: ComponentFixture<MisCarrerasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MisCarrerasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MisCarrerasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
