import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { WpApiParent } from './Parent';

import { WpApiLoader } from './Loaders';
import { IWpApiMedia } from './interfaces';

@Injectable()
export class WpApiMedia extends WpApiParent implements IWpApiMedia {
  constructor(
    wpApiLoader: WpApiLoader,
    http: HttpClient
  ) {
    super(wpApiLoader, http);
  }
  getList(options = {}) {
    return this.httpGet(`/media`, options)
  }
  get(mediaId: number, options = {}) {
    return this.httpGet(`/media/${mediaId}`, options)
  }
  create(body = {}, options = {}) {
    return this.httpPost(`/media`, body, options)
  }
  update(mediaId: number, body = {}, options = {}) {
    return this.httpPost(`/media/${mediaId}`, body, options)
  }
  delete(mediaId: number, options = {}) {
    return this.httpDelete(`/media/${mediaId}`, options)
  }
}
