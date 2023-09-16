import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlitterPage } from './glitter.page';

describe('GlitterPage', () => {
  let component: GlitterPage;
  let fixture: ComponentFixture<GlitterPage>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GlitterPage]
    });
    fixture = TestBed.createComponent(GlitterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
