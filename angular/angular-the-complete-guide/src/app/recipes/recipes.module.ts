import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipesComponent } from './recipes.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './recipe-item/recipe-item.component';



@NgModule({
  declarations: [RecipesComponent, RecipeDetailComponent, RecipeItemComponent],
  imports: [
    CommonModule
  ]
})
export class RecipesModule { }
