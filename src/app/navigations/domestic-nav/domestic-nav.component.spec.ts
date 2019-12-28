import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DomesticNavComponent } from './domestic-nav.component';

describe('DomesticNavComponent', () => {
  let component: DomesticNavComponent;
  let fixture: ComponentFixture<DomesticNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DomesticNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DomesticNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
