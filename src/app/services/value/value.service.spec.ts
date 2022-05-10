import { TestBed } from '@angular/core/testing';

import { ValueService } from './value.service';

export class FakeValueService extends ValueService {
  override value = 'fake service value';
}

describe('ValueService', () => {
  let service: ValueService;
  beforeEach(() => {
    service = new ValueService();
  });

  it('#getValue should return real value', () => {
    expect(service.getValue()).toBe('real value');
  });

  it('#setValue should set correct value', () => {
    service.setValue('changed value');
    expect(service.getValue()).toBe('changed value');
  });

  it('#getObservableValue should return value from observable', (done: DoneFn) => {
    service.getObservableValue().subscribe((value) => {
      expect(value).toBe('observable value');
      done();
    });
  });

  it('#getPromiseValue should return value from a promise', (done: DoneFn) => {
    service.getPromiseValue().then((value) => {
      expect(value).toBe('promise value');
      done();
    });
  });
});
