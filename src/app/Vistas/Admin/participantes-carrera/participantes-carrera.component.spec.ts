import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticipantesCarreraComponent } from './participantes-carrera.component';

describe('ParticipantesCarreraComponent', () => {
  let component: ParticipantesCarreraComponent;
  let fixture: ComponentFixture<ParticipantesCarreraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParticipantesCarreraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParticipantesCarreraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
