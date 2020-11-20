import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearRetosComponent } from './crear-retos.component';

describe('CrearRetosComponent', () => {
  let component: CrearRetosComponent;
  let fixture: ComponentFixture<CrearRetosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearRetosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearRetosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
