import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyNgrxComponent } from './my-ngrx.component';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

describe('MyNgrxComponent', () => {
  let component: MyNgrxComponent;
  let fixture: ComponentFixture<MyNgrxComponent>;
  let mockStore: any;

  beforeEach(async () => {
    mockStore = {
      select: jasmine.createSpy().and.returnValue(of([])),
      dispatch: jasmine.createSpy()
    };
    await TestBed.configureTestingModule({
      imports: [MyNgrxComponent],
      providers: [
        { provide: Store, useValue: mockStore },
        { provide: ActivatedRoute, useValue: {} }
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyNgrxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
