import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FppComponent } from './fpp.component';

describe('FppComponent', () => {
  let component: FppComponent;
  let fixture: ComponentFixture<FppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
