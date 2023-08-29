import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzaSizesComponent } from './pizza-sizes.component';

describe('PizzaSizesComponent', () => {
  let component: PizzaSizesComponent;
  let fixture: ComponentFixture<PizzaSizesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PizzaSizesComponent]
    });
    fixture = TestBed.createComponent(PizzaSizesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
