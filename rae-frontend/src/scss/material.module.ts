import { NgModule } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';

const modules = [MatDividerModule, MatListModule];

@NgModule({
  imports: [modules],
  exports: [modules],
})
export class MaterialModule {}
