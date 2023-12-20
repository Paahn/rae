import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MaterialModule } from 'src/scss/material.module';
import { NgOptimizedImage } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';

const modules = [
  CommonModule,
  MaterialModule,
  FontAwesomeModule,
  NgOptimizedImage,
];

@NgModule({
  declarations: [FooterComponent],
  imports: [modules],
  exports: [modules, FooterComponent],
})
export class SharedModule {}
