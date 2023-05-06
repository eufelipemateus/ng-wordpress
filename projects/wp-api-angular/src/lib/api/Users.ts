import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';


import { WpApiParent } from './Parent';

import { WpApiLoader } from './Loaders';
import { IWpApiUsers } from './interfaces';

@Injectable()
export class WpApiUsers extends WpApiParent implements IWpApiUsers {
  constructor(
    wpApiLoader: WpApiLoader,
    http: HttpClient
  ) {
    super(wpApiLoader, http);
  }
  getList(options = {}) {
    return this.httpGet(`/users`, options)
  }
  me(options = {}) {
    return this.httpGet(`/users/me`, options)
  }
  get(userId: number, options = {}) {
    return this.httpGet(`/users/${userId}`, options)
  }
  create(body = {}, options = {}) {
    return this.httpPost(`/users`, body, options)
  }
  update(userId: number, body = {}, options = {}) {
    return this.httpPost(`/users/${userId}`, body, options)
  }
  delete(userId: number, options = {}) {
    return this.httpDelete(`/users/${userId}`, options)
  }
}
