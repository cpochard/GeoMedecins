import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequeteDetailComponent } from './requete-detail.component';

describe('RequeteDetailComponent', () => {
  let component: RequeteDetailComponent;
  let fixture: ComponentFixture<RequeteDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequeteDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequeteDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
