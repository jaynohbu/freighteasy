import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HBOLComponent } from './hbol.component';

describe('HBOLComponent', () => {
  let component: HBOLComponent;
  let fixture: ComponentFixture<HBOLComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HBOLComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HBOLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
