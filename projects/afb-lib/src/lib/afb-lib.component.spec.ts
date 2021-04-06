import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfbLibComponent } from './afb-lib.component';

describe('AfbLibComponent', () => {
  let component: AfbLibComponent;
  let fixture: ComponentFixture<AfbLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfbLibComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AfbLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
