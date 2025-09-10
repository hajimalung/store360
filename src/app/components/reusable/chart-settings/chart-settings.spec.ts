import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartSettings } from './chart-settings';

describe('ChartSettings', () => {
  let component: ChartSettings;
  let fixture: ComponentFixture<ChartSettings>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChartSettings]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChartSettings);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
