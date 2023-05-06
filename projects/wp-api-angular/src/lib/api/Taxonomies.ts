import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { WpApiParent } from './Parent';

import { WpApiLoader } from './Loaders';
import { IWpApiTaxonomies } from './interfaces';


@Injectable()
export class WpApiTaxonomies extends WpApiParent implements IWpApiTaxonomies {
  constructor(
    wpApiLoader: WpApiLoader,
    http: HttpClient
  ) {
    super(wpApiLoader, http);
  }
  getList(options = {}) {
    return this.httpGet(`/taxonomies`, options)
  }
  get(taxonomiesType: string, options = {}) {
    return this.httpGet(`/taxonomies/${taxonomiesType}`, options)
  }
}
