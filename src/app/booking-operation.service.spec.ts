import { TestBed } from '@angular/core/testing';

import { BookingOperationService } from './booking-operation.service';

describe('BookingOperationService', () => {
  let service: BookingOperationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookingOperationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
