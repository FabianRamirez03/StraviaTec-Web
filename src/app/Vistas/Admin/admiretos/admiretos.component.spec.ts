import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmiretosComponent } from './admiretos.component';

describe('AdmiretosComponent', () => {
  let component: AdmiretosComponent;
  let fixture: ComponentFixture<AdmiretosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmiretosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmiretosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
