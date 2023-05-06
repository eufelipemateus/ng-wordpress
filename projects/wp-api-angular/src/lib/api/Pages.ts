import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { HttpResponse } from '@angular/common/http';

import { WpApiParent } from './Parent';
import { WpApiLoader } from './Loaders';
import { IWpApiPages } from './interfaces';


@Injectable()
export class WpApiPages extends WpApiParent implements IWpApiPages {
  constructor(
    wpApiLoader: WpApiLoader,
    http: HttpClient
  ) {
    super(wpApiLoader, http);
  }

  getList(options = {}) {
    return this.httpGet(`/pages`, options)
  }
  get(pageId: number, options = {}) {
    return this.httpGet(`/pages/${pageId}`, options)
  }
  create(body = {}, options = {}) {
    return this.httpPost(`/pages`, body, options)
  }
  update(pageId: number, body = {}, options = {}) {
    return this.httpPost(`/pages/${pageId}`, body, options)
  }
  delete(pageId: number, options = {}) {
    return this.httpDelete(`/pages/${pageId}`, options)
  }
  getMetaList(pageId: number, options = {}) {
    return this.httpGet(`/pages/${pageId}/meta`, options)
  }
  getMeta(pageId: number, metaId: number, options = {}) {
    return this.httpGet(`/pages/${pageId}/meta/${metaId}`, options)
  }
  getRevisionList(pageId: number, options = {}) {
    return this.httpGet(`/pages/${pageId}/revisions`, options)
  }
  getRevision(pageId: number, revisionId: number, options = {}) {
    return this.httpGet(`/pages/${pageId}/revisions/${revisionId}`, options)
  }
}
