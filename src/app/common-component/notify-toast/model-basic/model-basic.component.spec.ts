import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelBasicComponent } from './model-basic.component';

describe('ModelBasicComponent', () => {
  let component: ModelBasicComponent;
  let fixture: ComponentFixture<ModelBasicComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModelBasicComponent]
    });
    fixture = TestBed.createComponent(ModelBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
