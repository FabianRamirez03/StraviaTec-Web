import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticipantesPorCategoriasComponent } from './participantes-por-categorias.component';

describe('ParticipantesPorCategoriasComponent', () => {
  let component: ParticipantesPorCategoriasComponent;
  let fixture: ComponentFixture<ParticipantesPorCategoriasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParticipantesPorCategoriasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParticipantesPorCategoriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
