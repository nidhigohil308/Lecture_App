import { Injectable } from '@angular/core';
import { Recipe } from './recipe.modal';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  private recipes: Recipe[] = [
    {
      id: 'r1',
      title: 'Hagimaru',
      imageUrl: 'https://homepages.cae.wisc.edu/~ece533/images/arctichare.png',
      ingredints: [ 'pogo' , 'cable' , 'power' ]
    },
    {
      id: 'r2',
      title: 'Maggi',
      imageUrl: 'https://homepages.cae.wisc.edu/~ece533/images/fruits.png',
      ingredints: [ 'maggi' , 'water' , 'maggi masal' ]
    },
    {
      id: 'r3',
      title: 'Doremon',
      imageUrl: 'https://homepages.cae.wisc.edu/~ece533/images/cat.png',
      ingredints: [ 'maggi' , 'water' , 'maggi masal' ]
    },
  ];
  
  constructor() { }

  getAllRecipes() {
    return [...this.recipes];
  }

  geteRecipe(recipeId: string){
    return{...this.recipes.find(recipe => {
      return recipe.id === recipeId;
    }),};
  }
  deleteRecipe(recipeId: string){
    this.recipes=this.recipes.filter(recipe => {
      return recipe.id !== recipeId;
    });
  }
}
