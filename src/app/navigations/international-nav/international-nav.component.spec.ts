import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InternationalNavComponent } from './international-nav.component';

describe('InternationalNavComponent', () => {
  let component: InternationalNavComponent;
  let fixture: ComponentFixture<InternationalNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InternationalNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InternationalNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
