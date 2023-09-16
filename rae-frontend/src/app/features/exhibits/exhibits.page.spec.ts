import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExhibitsPage } from './exhibits.page';

describe('ExhibitsPage', () => {
  let component: ExhibitsPage;
  let fixture: ComponentFixture<ExhibitsPage>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExhibitsPage]
    });
    fixture = TestBed.createComponent(ExhibitsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
