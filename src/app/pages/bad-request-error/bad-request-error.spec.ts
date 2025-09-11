import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BadRequestError } from './bad-request-error';

describe('BadRequestError', () => {
  let component: BadRequestError;
  let fixture: ComponentFixture<BadRequestError>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BadRequestError]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BadRequestError);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
