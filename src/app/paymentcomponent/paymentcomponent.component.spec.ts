import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentcomponentComponent } from './paymentcomponent.component';

describe('PaymentcomponentComponent', () => {
  let component: PaymentcomponentComponent;
  let fixture: ComponentFixture<PaymentcomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentcomponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
