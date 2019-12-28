import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DomesticOpsComponent } from './domestic-ops.component';

describe('DomesticOpsComponent', () => {
  let component: DomesticOpsComponent;
  let fixture: ComponentFixture<DomesticOpsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DomesticOpsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DomesticOpsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
