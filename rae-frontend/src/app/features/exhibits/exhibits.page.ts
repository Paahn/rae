import { Component, OnInit } from '@angular/core';
import { contentContainerSelector } from 'src/app/app.constants';
import { UtilsService } from 'src/app/core/services/utils.service';

@Component({
  selector: 'app-exhibits',
  templateUrl: './exhibits.page.html',
  styleUrls: ['./exhibits.page.scss'],
})
export class ExhibitsPage implements OnInit {
  public constructor(private utilsService: UtilsService) {}

  public ngOnInit(): void {
    this.utilsService.scrollTop(contentContainerSelector);
  }
}
