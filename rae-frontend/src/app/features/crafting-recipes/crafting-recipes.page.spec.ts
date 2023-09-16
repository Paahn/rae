import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CraftingRecipesPage } from './crafting-recipes.page';

describe('CraftingRecipesPage', () => {
  let component: CraftingRecipesPage;
  let fixture: ComponentFixture<CraftingRecipesPage>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CraftingRecipesPage]
    });
    fixture = TestBed.createComponent(CraftingRecipesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
