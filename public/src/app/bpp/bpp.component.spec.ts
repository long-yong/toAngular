import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BppComponent } from './bpp.component';

describe('BppComponent', () => {
  let component: BppComponent;
  let fixture: ComponentFixture<BppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
