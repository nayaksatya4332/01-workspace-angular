import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Practice01Component } from './practice01.component';

describe('Practice01Component', () => {
  let component: Practice01Component;
  let fixture: ComponentFixture<Practice01Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Practice01Component]
    });
    fixture = TestBed.createComponent(Practice01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
