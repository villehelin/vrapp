import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainlocationComponent } from './trainlocation.component';

describe('TrainlocationComponent', () => {
  let component: TrainlocationComponent;
  let fixture: ComponentFixture<TrainlocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainlocationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainlocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
