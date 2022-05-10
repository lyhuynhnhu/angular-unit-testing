import { TempConverterPipe } from './temp-converter.pipe';

describe('TempConverterPipe', () => {
  const tempConverterPipe = new TempConverterPipe();

  it('should convert correct C to F correctly', () => {
    expect(Number.parseInt(tempConverterPipe.transform('86', 'C'))).toEqual(30);
  });

  it('should convert correct F to C correctly', () => {
    expect(Number.parseInt(tempConverterPipe.transform('30', 'F'))).toEqual(86);
  });

  it('should return empty when input is invalid', () => {
    expect(tempConverterPipe.transform('invalid', 'F')).toEqual('');
  });
});
