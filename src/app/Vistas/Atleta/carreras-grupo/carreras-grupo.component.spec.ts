import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrerasGrupoComponent } from './carreras-grupo.component';

describe('CarrerasGrupoComponent', () => {
  let component: CarrerasGrupoComponent;
  let fixture: ComponentFixture<CarrerasGrupoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarrerasGrupoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarrerasGrupoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
