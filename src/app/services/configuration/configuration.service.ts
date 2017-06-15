import { Injectable } from '@angular/core';
import { ConfigurationService as ConfigurationServiceBase } from '../configuration.service';

import * as configuration from '../../../../configuration';

@Injectable()
export class ConfigurationService extends ConfigurationServiceBase {
    getConfig(key?: string): any {
        return configuration.configuration;
    }
    getConfigKey(key: string): string {
        return configuration.configuration[key];
    }
}
