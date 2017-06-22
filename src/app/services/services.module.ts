import { NgModule } from '@angular/core';
import { DataService as DataServiceBase } from './';
import { DataService } from './data/data.service';

import { SearchService as SearchServiceBase } from './';
import { SearchService } from './search/search.service';

import { ConfigurationService as ConfigurationServiceBase } from './';
import { ConfigurationService } from './configuration/configuration.service';

import { MovieStoreServiceBase } from './';
import { MovieStoreService } from './movie-store/movie-store.service';

import { WatchListService as WatchListServiceBase } from './';
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
