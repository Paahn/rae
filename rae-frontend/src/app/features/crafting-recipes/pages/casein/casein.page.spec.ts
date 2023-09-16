import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseinPage } from './casein.page';

describe('CaseinPage', () => {
  let component: CaseinPage;
  let fixture: ComponentFixture<CaseinPage>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CaseinPage]
    });
    fixture = TestBed.createComponent(CaseinPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
