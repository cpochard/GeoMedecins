import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficherRequeteComponent } from './afficher-requete.component';

describe('AfficherRequeteComponent', () => {
  let component: AfficherRequeteComponent;
  let fixture: ComponentFixture<AfficherRequeteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AfficherRequeteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AfficherRequeteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
