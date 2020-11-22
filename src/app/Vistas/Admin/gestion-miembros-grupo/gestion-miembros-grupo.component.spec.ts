import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionMiembrosGrupoComponent } from './gestion-miembros-grupo.component';

describe('GestionMiembrosGrupoComponent', () => {
  let component: GestionMiembrosGrupoComponent;
  let fixture: ComponentFixture<GestionMiembrosGrupoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionMiembrosGrupoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionMiembrosGrupoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
