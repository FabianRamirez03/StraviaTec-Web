import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModiCarreraComponent } from './modi-carrera.component';

describe('ModiCarreraComponent', () => {
  let component: ModiCarreraComponent;
  let fixture: ComponentFixture<ModiCarreraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModiCarreraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModiCarreraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
