import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TraininfoComponent } from './traininfo.component';

describe('TraininfoComponent', () => {
  let component: TraininfoComponent;
  let fixture: ComponentFixture<TraininfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TraininfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TraininfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
