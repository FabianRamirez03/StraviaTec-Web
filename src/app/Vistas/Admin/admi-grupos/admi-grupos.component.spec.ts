import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmiGruposComponent } from './admi-grupos.component';

describe('AdmiGruposComponent', () => {
  let component: AdmiGruposComponent;
  let fixture: ComponentFixture<AdmiGruposComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmiGruposComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmiGruposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
