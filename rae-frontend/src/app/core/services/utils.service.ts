import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { WINDOW } from '../providers/window.provider';
import { of, delay } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UtilsService {
  public constructor(
    @Inject(WINDOW) private window: Window,
    @Inject(DOCUMENT) private document: Document
  ) {}

  public scrollTop(containerQuerySelector?: string): void {
    const contentContainer = containerQuerySelector
      ? this.document.querySelector(containerQuerySelector) ?? this.window
      : this.window;
    contentContainer.scroll({ top: 0, left: 0, behavior: 'smooth' });
    console.log('UtilsService ran');
  }

  /**
   * @description
   * Scroll to top with added delay
   */
  public scrollTopWithDelay(containerQuerySelector?: string): void {
    of(true)
      .pipe(delay(250))
      .subscribe(() => {
        this.scrollTop(containerQuerySelector);
      });
  }
}
