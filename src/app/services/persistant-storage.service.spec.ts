import { TestBed } from '@angular/core/testing';

import { PersistantStorageService } from './persistant-storage.service';

describe('PersistantStorageService', () => {
  let service: PersistantStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PersistantStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
