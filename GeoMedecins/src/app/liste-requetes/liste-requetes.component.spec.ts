import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeRequetesComponent } from './liste-requetes.component';

describe('ListeRequetesComponent', () => {
  let component: ListeRequetesComponent;
  let fixture: ComponentFixture<ListeRequetesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeRequetesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeRequetesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
