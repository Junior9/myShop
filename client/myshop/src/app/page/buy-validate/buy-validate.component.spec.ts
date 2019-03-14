import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyValidateComponent } from './buy-validate.component';

describe('BuyValidateComponent', () => {
  let component: BuyValidateComponent;
  let fixture: ComponentFixture<BuyValidateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuyValidateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyValidateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
