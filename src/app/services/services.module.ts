import { NgModule } from '@angular/core';

import { DataService as DataServiceBase } from './data/data.service';
import { DataService } from './data/data.service';

import { SearchService as SearchServiceBase } from './search.service';
import { SearchService } from './search/search.service';

import { ConfigurationService as ConfigurationServiceBase } from './configuration.service';
import { ConfigurationService } from './configuration/configuration.service';

import { MovieStoreServiceBase } from './movie-store.service.base';
import { MovieStoreService } from './movie-store/movie-store.service';

import { WatchListService as WatchListServiceBase } from './watchlist.service';
import { WatchListService } from './watchlist/watchlist.service';

import { JsonpModule } from '@angular/http';

@NgModule({
    imports: [JsonpModule],
    providers: [
        { provide: DataServiceBase, useClass: DataService },
        { provide: SearchServiceBase, useClass: SearchService },
        { provide: ConfigurationServiceBase, useClass: ConfigurationService },
        { provide: MovieStoreServiceBase, useClass: MovieStoreService },
        { provide: WatchListServiceBase, useClass: WatchListService }
    ],
})
export class ServicesModule { }
