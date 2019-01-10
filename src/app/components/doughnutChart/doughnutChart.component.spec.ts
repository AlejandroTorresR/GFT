import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { doughnutChartComponent } from './doughnutChart.component';

describe('doughnutChartComponent', () => {
  let component: doughnutChartComponent;
  let fixture: ComponentFixture<doughnutChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ doughnutChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(doughnutChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
