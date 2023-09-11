import { Component } from '@angular/core';
import { faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';
@Component({
  selector: 'app-page-dashboard',
  templateUrl: './page-dashboard.component.html',
  styleUrls: ['./page-dashboard.component.scss'],
})
export class PageDashboardComponent {
  public faLinkedin = faLinkedin;
  public faFacebook = faFacebook;
}
