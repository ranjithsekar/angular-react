import { TestBed } from '@angular/core/testing';

import { CalcService } from './calc.service';

describe('CalcService', () => {

  beforeEach(() => TestBed.configureTestingModule({
    providers: [CalcService]
  }));

  it('should be created', () => {
    const service: CalcService = TestBed.get(CalcService);
    expect(service).toBeTruthy();
  });

  it('should add numbers', () => {
    const service: CalcService = TestBed.get(CalcService);
    expect(service.add(4, 4)).toBe(8, 'output is not correct');
  });

  it('should subtract numbers', () => {
    const service: CalcService = TestBed.get(CalcService);
    expect(service.subtract(4, 4)).toBe(0);
  });

  it('should multiply numbers', () => {
    const service: CalcService = TestBed.get(CalcService);
    expect(service.multiply(4, 4)).toBe(16);
  });

});
