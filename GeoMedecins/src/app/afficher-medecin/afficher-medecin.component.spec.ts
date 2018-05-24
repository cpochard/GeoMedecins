import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficherMedecinComponent } from './afficher-medecin.component';

describe('AfficherMedecinComponent', () => {
  let component: AfficherMedecinComponent;
  let fixture: ComponentFixture<AfficherMedecinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AfficherMedecinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AfficherMedecinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
