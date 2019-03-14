import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyPayComponent } from './buy-pay.component';

describe('BuyPayComponent', () => {
  let component: BuyPayComponent;
  let fixture: ComponentFixture<BuyPayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuyPayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyPayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
