import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActividadesGrupoComponent } from './actividades-grupo.component';

describe('ActividadesGrupoComponent', () => {
  let component: ActividadesGrupoComponent;
  let fixture: ComponentFixture<ActividadesGrupoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActividadesGrupoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActividadesGrupoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
