import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';


import { WpApiParent } from './Parent';

import { WpApiLoader } from './Loaders';
import { IWpApiStatuses } from './interfaces';


@Injectable()
export class WpApiStatuses extends WpApiParent implements IWpApiStatuses {
  constructor(
     wpApiLoader: WpApiLoader,
     http: HttpClient
  ) {
    super(wpApiLoader, http);
  }
  getList(options = {}) {
    return this.httpGet(`/statuses`, options)
  }
  get(statusesName: string, options = {}) {
    return this.httpGet(`/statuses/${statusesName}`, options)
  }
}
