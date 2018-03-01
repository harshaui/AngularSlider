import { TestBed, inject } from '@angular/core/testing';

import { SliderServiceService } from './slider-service.service';

describe('SliderServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SliderServiceService]
    });
  });

  it('should be created', inject([SliderServiceService], (service: SliderServiceService) => {
    expect(service).toBeTruthy();
  }));
});
