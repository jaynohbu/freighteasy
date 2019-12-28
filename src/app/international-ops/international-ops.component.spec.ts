import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InternationalOpsComponent } from './international-ops.component';

describe('InternationalOpsComponent', () => {
  let component: InternationalOpsComponent;
  let fixture: ComponentFixture<InternationalOpsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InternationalOpsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InternationalOpsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
