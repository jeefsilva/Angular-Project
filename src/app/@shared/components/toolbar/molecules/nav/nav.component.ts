import { MdcTabBar, MdcTabChangeEvent } from '@angular-mdc/web';
import { AfterContentInit, Component, OnDestroy, ViewChild } from '@angular/core';
import { NavigationEnd, Router, RouterEvent } from '@angular/router';
import { Observable, Subject, Subscription } from 'rxjs';
import SearchItem from '../search/search-item';
import { SearchComponent } from '../search/search.component';
import { SEARCH_DATA } from './search-data';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnDestroy, AfterContentInit {
  @ViewChild('tabBar')
  private tabBar: MdcTabBar;
  private currentIndex = -1;
  private contentReady = false;

  @ViewChild('mobileSearch')
  public search: SearchComponent;

  public searchData = SEARCH_DATA;
  public searchOpen = false;
  public tabs: Tab[] = [
    {
      label: 'Por quê a sobTIC?',
      route: '/'
    },
    {
      label: 'Processo',
      route: '/processo'
    },
    {
      label: 'Parceiros',
      route: '/parceiros'
    },
    {
      label: 'Soluções',
      route: '/solucoes'
    },
    {
      label: 'Clientes',
      route: '/clientes'
    }
  ];

  private routerSubscription: Subscription;

  constructor(private router: Router) {
    this.routerSubscription = this.router.events.subscribe((event: RouterEvent) => {
      if (event instanceof NavigationEnd) {
        const tab = this.tabs.filter(t => event.url.startsWith(t.route)).pop(),
          index = this.tabs.indexOf(tab);

        this.currentIndex = index;
        if (this.contentReady) {
          this.setTab(index);
        }
      }
    });
  }

  ngAfterContentInit(): void {
    this.contentReady = true;
    if (this. currentIndex !== -1) {
      setTimeout(() => this.setTab(this.currentIndex));
    }
  }

  ngOnDestroy(): void {
    this.routerSubscription.unsubscribe();
  }

  openSearch() {
    this.searchOpen = true;
    setTimeout(() => {
      this.search.input.nativeElement.focus();
    });
  }

  closeSearch() {
    this.searchOpen = false;
    this.search.clear();
  }

  onSearchResultClicked(result: SearchItem) {
    if (result.scroll) {
      setTimeout(() => window.scroll(0, result.scroll));
    }
  }

  onTabChanged(event: MdcTabChangeEvent) {
    this.selectTab(event.index);
  }

  selectTab(index: number) {
    if (this.currentIndex === index) {
      return;
    }

    this.setTab(index);
    this.router.navigate([this.tabs[index].route]);
  }

  private setTab(index: number) {
    this.currentIndex = index;
    try {
      this.tabBar.setTabActiveAtIndex(index);
    } catch (e) {
      console.error(e);
    }
  }
}


interface Tab {
  label: string;
  route: string;
}
