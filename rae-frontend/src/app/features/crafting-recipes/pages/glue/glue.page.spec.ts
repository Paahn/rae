import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GluePage } from './glue.page';

describe('GluePage', () => {
  let component: GluePage;
  let fixture: ComponentFixture<GluePage>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GluePage]
    });
    fixture = TestBed.createComponent(GluePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
