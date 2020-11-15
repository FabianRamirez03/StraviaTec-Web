import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnirseGrupoComponent } from './unirse-grupo.component';

describe('UnirseGrupoComponent', () => {
  let component: UnirseGrupoComponent;
  let fixture: ComponentFixture<UnirseGrupoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnirseGrupoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnirseGrupoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
