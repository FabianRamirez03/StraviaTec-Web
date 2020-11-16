import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoPatrocinadorComponent } from './nuevo-patrocinador.component';

describe('NuevoPatrocinadorComponent', () => {
  let component: NuevoPatrocinadorComponent;
  let fixture: ComponentFixture<NuevoPatrocinadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevoPatrocinadorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevoPatrocinadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
