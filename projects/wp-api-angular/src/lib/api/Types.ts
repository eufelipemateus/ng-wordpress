import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { WpApiParent } from './Parent';
import { WpApiLoader } from './Loaders';
import { IWpApiTypes } from './interfaces';


@Injectable()
export class WpApiTypes extends WpApiParent implements IWpApiTypes {
  constructor(
     wpApiLoader: WpApiLoader,
     http: HttpClient
  ) {
    super(wpApiLoader, http);
  }
  getList(options = {}) {
    return this.httpGet(`/types`, options)
  }
  get(postType: string, options = {}) {
    return this.httpGet(`/types/${postType}`, options)
  }
}
