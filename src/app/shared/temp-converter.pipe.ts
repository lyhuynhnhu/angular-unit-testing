import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tempConverter',
})
export class TempConverterPipe implements PipeTransform {
  transform(value: string, unit: 'C' | 'F'): string {
    try {
      const numberValue = Number.parseInt(value);
      if (isNaN(numberValue)) return '';
      let temperature = undefined;
      if (unit === 'C') {
        temperature = (numberValue - 32) / 1.8;
        return temperature.toFixed(2);
      } else {
        temperature = numberValue * 1.8 + 32;
        return temperature.toFixed(2);
      }
    } catch (error) {
      return '';
    }
  }
}
