import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModiRetosComponent } from './modi-retos.component';

describe('ModiRetosComponent', () => {
  let component: ModiRetosComponent;
  let fixture: ComponentFixture<ModiRetosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModiRetosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModiRetosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
