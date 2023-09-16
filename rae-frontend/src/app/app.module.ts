import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { APP_CONFIG, APP_DI_CONFIG } from './app.config';

@NgModule({
  declarations: [AppComponent],
  imports: [AppRoutingModule, CoreModule, SharedModule],
  providers: [{ provide: APP_CONFIG, useValue: APP_DI_CONFIG }],
  bootstrap: [AppComponent],
})
export class AppModule {}
