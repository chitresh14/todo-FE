/**
 * DO NOT EDIT THIS FILE
 */

import { enviroment } from "./enviroments/enviroment";

export const CONFIG = enviroment;
export const API_URL = CONFIG.API ? CONFIG.API : '$(API_URL)';
export const APP_ENV = CONFIG.APP_ENV ? CONFIG.APP_ENV : '$(APP_ENV)';