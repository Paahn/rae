import { Component, Inject } from '@angular/core';
import { faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { APP_CONFIG, AppConfig } from 'src/app/app.config';
@Component({
  selector: 'app-page-dashboard',
  templateUrl: './page-dashboard.component.html',
  styleUrls: ['./page-dashboard.component.scss'],
})
export class PageDashboardComponent {
  public faLinkedin = faLinkedin;
  public faFacebook = faFacebook;
  public raeFacebookUrl: string;

  public constructor(@Inject(APP_CONFIG) private config: AppConfig) {
    this.raeFacebookUrl = this.config.urls.raeFacebook;
  }
}
