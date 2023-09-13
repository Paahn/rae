import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';

const modules = [MatButtonModule, MatDividerModule, MatListModule];

@NgModule({
  imports: [modules],
  exports: [modules],
})
export class MaterialModule {}
