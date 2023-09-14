import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MaterialModule } from 'src/scss/material.module';

const modules = [CommonModule, MaterialModule, FontAwesomeModule];

@NgModule({
  declarations: [],
  imports: [modules],
  exports: [modules],
})
export class SharedModule {}
