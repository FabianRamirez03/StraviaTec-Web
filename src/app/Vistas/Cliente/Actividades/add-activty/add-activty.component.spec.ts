import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddActivtyComponent } from './add-activty.component';

describe('AddActivtyComponent', () => {
  let component: AddActivtyComponent;
  let fixture: ComponentFixture<AddActivtyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddActivtyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddActivtyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
