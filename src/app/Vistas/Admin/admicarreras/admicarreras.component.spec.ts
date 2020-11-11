import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmicarrerasComponent } from './admicarreras.component';

describe('AdmicarrerasComponent', () => {
  let component: AdmicarrerasComponent;
  let fixture: ComponentFixture<AdmicarrerasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmicarrerasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmicarrerasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
