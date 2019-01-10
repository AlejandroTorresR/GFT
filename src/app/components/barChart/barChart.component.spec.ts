import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { barChartComponent } from './barChart.component';

describe('barChartComponent', () => {
  let component: barChartComponent;
  let fixture: ComponentFixture<barChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ barChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(barChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
