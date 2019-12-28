import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MBOLComponent } from './mbol.component';

describe('MBOLComponent', () => {
  let component: MBOLComponent;
  let fixture: ComponentFixture<MBOLComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MBOLComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MBOLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
