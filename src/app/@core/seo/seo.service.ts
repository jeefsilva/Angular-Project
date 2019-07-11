import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { NavigationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

@Injectable()
export class SeoService {
  private defaultData: SeoData;
  private canonicalLink: HTMLLinkElement;

  constructor(
    private readonly title: Title,
    private readonly meta: Meta, router: Router,
    @Inject(DOCUMENT)
    private readonly document: Document
  ) {
    this.defaultData = this.getDefaultData();
    this.createCanonicalLink();

    router.events
      .pipe(
        filter(e => e instanceof NavigationEnd),
        map(e => {
          let route = router.routerState.root;
          while (route.firstChild) {
            route = route.firstChild;
          }

          return route.snapshot;
        })
      )
      .subscribe(route => {
        const data = <SeoData> route.data;

        title.setTitle(data.title || this.defaultData.title);
        meta.updateTag({name: 'description', content: data.description || this.defaultData.description});

        const path = route.pathFromRoot
          .map(r => r.url)
          .filter(p => p.length)
          .join('/');

        this.canonicalLink.setAttribute('href', `${environment.domain}/${path}`);
      });
  }

  private getDefaultData(): SeoData {
    return {
      title: this.title.getTitle(),
      description: this.meta.getTag('name=description').content
    };
  }

  private createCanonicalLink() {
    this.canonicalLink = this.document.createElement('link');
    this.canonicalLink.setAttribute('rel', 'canonical');
    this.canonicalLink.setAttribute('href', `${environment.domain}/`);
    this.document.head.appendChild(this.canonicalLink);
  }
}

interface SeoData {
  title: string;
  description: string;
}
