import { Component, Inject, ViewChild } from '@angular/core';
import { MatSidenav, MatDrawerMode } from '@angular/material/sidenav';
import {
  faFacebook,
  faLinkedin,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import { APP_CONFIG, AppConfig } from 'src/app/app.config';
@Component({
  selector: 'app-page-dashboard',
  templateUrl: './page-dashboard.component.html',
  styleUrls: ['./page-dashboard.component.scss'],
})
export class PageDashboardComponent {
  @ViewChild('sidenav') public sidenav!: MatSidenav;

  public faLinkedin = faLinkedin;
  public faFacebook = faFacebook;
  public faInstragram = faInstagram;
  public raeFacebookUrl: string;
  public raeLinkedinUrl: string;
  public raeInstagramUrl: string;
  public sidenavMode: MatDrawerMode = 'over';

  public constructor(@Inject(APP_CONFIG) private config: AppConfig) {
    this.raeFacebookUrl = this.config.urls.raeFacebook;
    this.raeLinkedinUrl = this.config.urls.raeLinkedin;
    this.raeInstagramUrl = this.config.urls.raeInstagram;
  }

  public onMenuItemSelect(): void {
    if ((this.sidenavMode = 'over')) {
      this.sidenav.close();
    }
  }
}
