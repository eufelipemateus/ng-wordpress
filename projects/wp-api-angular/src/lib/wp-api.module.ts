import {
  Provider,
  NgModule,
  ModuleWithProviders
} from '@angular/core';
import 'rxjs';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { WpApiPosts } from './api/Posts';
import { WpApiPages } from './api/Pages';
import { WpApiComments } from './api/Comments';
import { WpApiTypes } from './api/Types';
import { WpApiMedia } from './api/Media';
import { WpApiUsers } from './api/Users';
import { WpApiTaxonomies } from './api/Taxonomies';
import { WpApiStatuses } from './api/Statuses';
import { WpApiTerms } from './api/Terms';
import { WpApiCustom } from './api/Custom';
import { WpApiLoader, WpApiStaticLoader } from './api/Loaders';

export function WpApiLoaderFactory() {
  return new WpApiStaticLoader();
}

@NgModule({
  imports: [
    HttpClientModule
  ],
  exports: [
    HttpClientModule
  ],
  providers: [
    WpApiPosts,
    WpApiPages,
    WpApiComments,
    WpApiTypes,
    WpApiMedia,
    WpApiUsers,
    WpApiTaxonomies,
    WpApiStatuses,
    WpApiTerms,
    WpApiCustom
  ]
})
export class WpApiModule {
  static forRoot(providedLoader: any = {
    provide: WpApiLoader,
    useFactory: WpApiLoaderFactory,
  }): ModuleWithProviders<WpApiModule> {
    return {
      ngModule: WpApiModule,
      providers: [
        providedLoader
      ]
    };
  }
}
