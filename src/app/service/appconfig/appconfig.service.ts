import { InjectionToken } from '@angular/core';
import { IAppConfig } from './Iapp.config';


export const APP_CONFIG = new InjectionToken<IAppConfig>('appconfig.service');

export const API_CONFIG: IAppConfig = {
  apiEndPoint: 'http://jsonplaceholder.typicode.com/',
  pageSize: 10,
  token: 'WYTEYRHGHJD2313'
}
