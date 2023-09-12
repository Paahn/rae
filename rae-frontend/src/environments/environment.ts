import { AppEnvironment } from './environment.model';
import { environment as defaultEnvironment } from './environment.prod';

export const environment: AppEnvironment = { ...defaultEnvironment };
