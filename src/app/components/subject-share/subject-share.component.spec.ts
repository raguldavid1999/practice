import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectShareComponent } from './subject-share.component';
import { ActivatedRoute } from '@angular/router';

describe('SubjectShareComponent', () => {
  let component: SubjectShareComponent;
  let fixture: ComponentFixture<SubjectShareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubjectShareComponent],
      providers:[{ provide: ActivatedRoute, useValue: {} }]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubjectShareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
