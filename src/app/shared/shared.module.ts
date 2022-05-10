import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { TempConverterPipe } from './temp-converter.pipe';

@NgModule({
  declarations: [TempConverterPipe],
  imports: [CommonModule],
  exports: [CommonModule, TempConverterPipe],
})
export class SharedModule {}
