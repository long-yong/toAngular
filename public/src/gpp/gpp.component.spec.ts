import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GppComponent } from './gpp.component';

describe('GppComponent', () => {
  let component: GppComponent;
  let fixture: ComponentFixture<GppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
