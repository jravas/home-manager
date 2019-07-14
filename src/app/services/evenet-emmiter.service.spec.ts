import { TestBed } from '@angular/core/testing';

import { EvenetEmmiterService } from './evenet-emmiter.service';

describe('EvenetEmmiterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EvenetEmmiterService = TestBed.get(EvenetEmmiterService);
    expect(service).toBeTruthy();
  });
});
