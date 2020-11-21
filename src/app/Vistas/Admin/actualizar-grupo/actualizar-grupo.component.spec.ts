import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarGrupoComponent } from './actualizar-grupo.component';

describe('ActualizarGrupoComponent', () => {
  let component: ActualizarGrupoComponent;
  let fixture: ComponentFixture<ActualizarGrupoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualizarGrupoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActualizarGrupoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
