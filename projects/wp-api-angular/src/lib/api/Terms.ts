import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { WpApiParent } from './Parent';
import { WpApiLoader } from './Loaders';
import { IWpApiTerms } from './interfaces';

const defaultTaxoType = 'categories';

@Injectable()
export class WpApiTerms extends WpApiParent implements IWpApiTerms {
  constructor(
     wpApiLoader: WpApiLoader,
    http: HttpClient
  ) {
    super(wpApiLoader, http);
  }
  getList(taxonomiesType = defaultTaxoType , options = {}) {
    return this.httpGet(`/${taxonomiesType}`, options)
  }
  get(taxonomiesType = defaultTaxoType, termId: number, options = {}) {
    return this.httpGet(`/${taxonomiesType}/${termId}`, options)
  }
  create(taxonomiesType = defaultTaxoType, body = {}, options = {}) {
    return this.httpPost(`/${taxonomiesType}`, body, options)
  }
  update(taxonomiesType = defaultTaxoType, termId: number, body = {}, options = {}) {
    return this.httpPost(`/${taxonomiesType}/${termId}`, body, options)
  }
  delete(taxonomiesType = defaultTaxoType, termId: number, options = {}) {
    return this.httpDelete(`/${taxonomiesType}/${termId}`, options)
  }
}
