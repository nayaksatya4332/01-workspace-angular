import { TestBed } from '@angular/core/testing';

import { Practice00Service } from './practice00.service';

describe('Practice00Service', () => {
  let service: Practice00Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Practice00Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
