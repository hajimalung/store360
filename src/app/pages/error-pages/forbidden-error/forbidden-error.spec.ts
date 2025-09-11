import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForbiddenError } from './forbidden-error';

describe('ForbiddenError', () => {
  let component: ForbiddenError;
  let fixture: ComponentFixture<ForbiddenError>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ForbiddenError]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForbiddenError);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
