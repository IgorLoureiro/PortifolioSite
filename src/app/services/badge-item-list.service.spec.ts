import { TestBed } from '@angular/core/testing';

import { BadgeItemListService } from './badge-item-list.service';

describe('BadgeItemListService', () => {
  let service: BadgeItemListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BadgeItemListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
