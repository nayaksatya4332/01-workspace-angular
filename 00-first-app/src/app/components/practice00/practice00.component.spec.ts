import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Practice00Component } from './practice00.component';

describe('Practice00Component', () => {
  let component: Practice00Component;
  let fixture: ComponentFixture<Practice00Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Practice00Component]
    });
    fixture = TestBed.createComponent(Practice00Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
