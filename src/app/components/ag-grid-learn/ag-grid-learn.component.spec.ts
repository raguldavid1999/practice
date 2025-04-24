import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgGridLearnComponent } from './ag-grid-learn.component';

describe('AgGridLearnComponent', () => {
  let component: AgGridLearnComponent;
  let fixture: ComponentFixture<AgGridLearnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgGridLearnComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgGridLearnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
