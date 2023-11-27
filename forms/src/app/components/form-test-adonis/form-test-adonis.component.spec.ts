import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormTestAdonisComponent } from './form-test-adonis.component';

describe('FormTestAdonisComponent', () => {
  let component: FormTestAdonisComponent;
  let fixture: ComponentFixture<FormTestAdonisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormTestAdonisComponent]
    });
    fixture = TestBed.createComponent(FormTestAdonisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
