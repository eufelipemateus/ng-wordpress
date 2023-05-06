import { stripTrailingSlash } from './utils';

export abstract class WpApiLoader {
  abstract getWebServiceUrl(postfix: string): string;
}

export class WpApiStaticLoader implements WpApiLoader {
  completeUrl: string;
  constructor(
    private baseUrl: string = 'http://changeYourDomainHere.com/wp-json',
    private namespace: string = '/wp/v2'
  ) {
    this.completeUrl = `${stripTrailingSlash(this.baseUrl)}${this.namespace}`;
  }

  public getWebServiceUrl(postfix: string): string {
    return `${this.completeUrl}${postfix}`
  }
}
