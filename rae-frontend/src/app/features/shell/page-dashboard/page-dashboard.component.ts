import { Component, Inject, ViewChild } from '@angular/core';
import {
  MatSidenav,
  MatDrawerMode,
  MatSidenavContent,
} from '@angular/material/sidenav';
import { NavigationEnd, Router } from '@angular/router';
import {
  faFacebook,
  faLinkedin,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import { filter, Subscription } from 'rxjs';
import { APP_CONFIG, AppConfig } from 'src/app/app.config';
@Component({
  selector: 'app-page-dashboard',
  templateUrl: './page-dashboard.component.html',
  styleUrls: ['./page-dashboard.component.scss'],
})
export class PageDashboardComponent {
  @ViewChild('sidenav') public sidenav!: MatSidenav;
  @ViewChild(MatSidenavContent) public sidenavContent!: MatSidenavContent;

  public faLinkedin = faLinkedin;
  public faFacebook = faFacebook;
  public faInstragram = faInstagram;
  public raeFacebookUrl: string;
  public raeLinkedinUrl: string;
  public raeInstagramUrl: string;
  public sidenavMode: MatDrawerMode = 'over';

  private routerEventsSubscription = Subscription.EMPTY;

  public constructor(
    @Inject(APP_CONFIG) private config: AppConfig,
    private router: Router,
  ) {
    this.raeFacebookUrl = this.config.urls.raeFacebook;
    this.raeLinkedinUrl = this.config.urls.raeLinkedin;
    this.raeInstagramUrl = this.config.urls.raeInstagram;
  }

  public ngAfterViewInit(): void {
    this.routerEventsSubscription = this.router.events
      .pipe(
        filter(
          (event): event is NavigationEnd => event instanceof NavigationEnd,
        ),
      )
      .subscribe(() => this.scrollContentTop());
  }

  public ngOnDestroy(): void {
    this.routerEventsSubscription.unsubscribe();
  }

  public onMenuItemSelect(): void {
    if (this.sidenavMode === 'over') {
      this.sidenav.close();
    }
  }

  private scrollContentTop(): void {
    setTimeout(() => {
      this.sidenavContent.scrollTo({ top: 0, left: 0 });
    });
  }
}
