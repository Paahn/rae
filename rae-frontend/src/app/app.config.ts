import { InjectionToken } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AppEnvironment } from 'src/environments/environment.model';

export const APP_CONFIG = new InjectionToken<AppConfig>('app.config');

export interface AppConfig extends AppEnvironment {
  routes: {};
}

export const APP_DI_CONFIG: AppConfig = {
  ...environment,
  routes: {},
};
