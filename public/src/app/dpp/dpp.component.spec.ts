import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DppComponent } from './dpp.component';

describe('DppComponent', () => {
  let component: DppComponent;
  let fixture: ComponentFixture<DppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
