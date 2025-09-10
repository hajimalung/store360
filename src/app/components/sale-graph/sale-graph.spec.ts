import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaleGraph } from './sale-graph';

describe('SaleGraph', () => {
  let component: SaleGraph;
  let fixture: ComponentFixture<SaleGraph>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SaleGraph]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaleGraph);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
