import { TestBed } from '@angular/core/testing';

import { MasterService } from './master.service';
import { ValueService } from '../value/value.service';

export class FakeValueService extends ValueService {
  override value = 'fake service value';
}

describe('MasterService', () => {
  let masterService: MasterService;

  it('#getValue should return real value from the real service', () => {
    masterService = new MasterService(new ValueService());
    expect(masterService.getValue()).toBe('real value');
  });

  it('#getValue should return faked value from a fakeService', () => {
    masterService = new MasterService(new FakeValueService());
    expect(masterService.getValue()).toBe('fake service value');
  });

  it('#getValue should return faked value from a fake object', () => {
    const fake = { getValue: () => 'fake value' };
    masterService = new MasterService(fake as ValueService);
    expect(masterService.getValue()).toBe('fake value');
  });

  it('#getValue should return stubbed value from a spy', () => {
    // create `getValue` spy on an object representing the ValueService
    const valueServiceSpy = jasmine.createSpyObj('ValueService', ['getValue']);

    // set the value to return when the `getValue` spy is called.
    const stubValue = 'stub value';
    valueServiceSpy.getValue.and.returnValue(stubValue);

    masterService = new MasterService(valueServiceSpy);

    expect(masterService.getValue())
      .withContext('service returned stub value')
      .toBe(stubValue);
    expect(valueServiceSpy.getValue.calls.count())
      .withContext('spy method was called once')
      .toBe(1);
    expect(valueServiceSpy.getValue.calls.mostRecent().returnValue).toBe(
      stubValue
    );
  });
});

describe('MasterService with TestBed', () => {
  let masterService: MasterService;
  let stubValue = '';
  let valueServiceSpy: jasmine.SpyObj<ValueService>;
  beforeEach(() => {
    valueServiceSpy = jasmine.createSpyObj('ValueService', ['getValue']);
    stubValue = 'stub value';
    masterService = new MasterService(valueServiceSpy);

    valueServiceSpy.getValue.and.returnValue(stubValue);
    return { masterService, stubValue, valueServiceSpy };
  });

  it('getValue should return stubbed value from a spy', () => {
    expect(masterService.getValue())
      .withContext('service returned stub value')
      .toBe(stubValue);
    expect(valueServiceSpy.getValue.calls.count())
      .withContext('spy method was called once')
      .toBe(1);
    expect(valueServiceSpy.getValue.calls.mostRecent().returnValue).toBe(
      stubValue
    );
  });
});
