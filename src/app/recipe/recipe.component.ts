import { Component, OnInit } from '@angular/core';
import { ForkifyServiceService } from '../forkify-service.service';
import { Recipe } from '../recipe';
import { log } from 'console';

@Component({
  selector: 'app-recipe',
  imports: [],
  templateUrl: './recipe.component.html',
  styleUrl: './recipe.component.css'
})
export class RecipeComponent {

  recipeDetails: Recipe | undefined;

  constructor(private forkifyServiceService: ForkifyServiceService) { }
  ngOnInit() {
    this.forkifyServiceService.currentMessage.subscribe(
      (msg) => {
        if (msg != '') {
          this.forkifyServiceService.getRecipeDetails(msg).then((result: any) => {
            this.recipeDetails = result.recipe;
          })
        }
      }
    );
  }


}

