import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaProductAdmComponent } from './tabla-product-adm.component';

describe('TablaProductAdmComponent', () => {
  let component: TablaProductAdmComponent;
  let fixture: ComponentFixture<TablaProductAdmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablaProductAdmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaProductAdmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
