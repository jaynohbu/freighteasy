import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountingOpsComponent } from './accounting-ops.component';

describe('AccountingOpsComponent', () => {
  let component: AccountingOpsComponent;
  let fixture: ComponentFixture<AccountingOpsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountingOpsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountingOpsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
