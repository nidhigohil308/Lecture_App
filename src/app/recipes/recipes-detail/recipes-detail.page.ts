import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipesService } from '../recipes.service';
import { Recipe } from '../recipe.modal';
import { AlertController } from '@ionic/angular';
import { Route } from '@angular/compiler/src/core';
import { strict } from 'assert';

@Component({
  selector: 'app-recipes-detail',
  templateUrl: './recipes-detail.page.html',
  styleUrls: ['./recipes-detail.page.scss'],
})
export class RecipesDetailPage implements OnInit {

  //loadedRecipe: Recipe;

  constructor(
    private activatedRoute: ActivatedRoute, 
    private recipesService: RecipesService,
    private recipeService:RecipesService,
    private router:Router,
    private altctr: AlertController) {}
  loadedRecipe:Recipe;

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap =>{
      if(!paramMap.has('recipeId')){
          return;
      }
      const recipeId = paramMap.get('recipeId');
      this.loadedRecipe=this.recipeService.geteRecipe(recipeId);
        //(recipeId);
      if(!this.loadedRecipe.id){
        this.router.navigate(['recipes']);
      }
    });
  }

  onDeleteClick(){
     const alert=this.altctr.create({
       header: 'Are you sure?',
       message: 'Are you sure delete this recipe?',
       buttons:['Ok']       
     });
     this.recipeService.deleteRecipe(this.loadedRecipe.id);
     this.router.navigate(['recipes']);
   }
 

}
