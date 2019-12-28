import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountingNavComponent } from './accounting-nav.component';

describe('AccountingNavComponent', () => {
  let component: AccountingNavComponent;
  let fixture: ComponentFixture<AccountingNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountingNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountingNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
