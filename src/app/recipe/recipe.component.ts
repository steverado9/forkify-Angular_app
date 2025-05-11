import { Component, OnInit } from '@angular/core';
import { ForkifyServiceService } from '../forkify-service.service';
import { Recipe } from '../recipe';
import { log } from 'console';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-recipe',
  imports: [CommonModule],
  templateUrl: './recipe.component.html',
  styleUrl: './recipe.component.css'
})
export class RecipeComponent {

  recipeDetails: Recipe | undefined;

  constructor(private forkifyServiceService: ForkifyServiceService) { }

  //gets the string of id from forkifyservice and puts it as a argument inside getRecipeDetails function
  ngOnInit() {
    this.forkifyServiceService.currentMessage.subscribe(
      (msg) => {
        //enter inside the if statement only if message is not empty i.e has the string of id
        if (msg != '') {
          //when it enters the if statement, it calls the getRecipeDetails function with the gotten id
          this.forkifyServiceService.getRecipeDetails(msg).then((result: any) => {
            //and turns the json data from result to an array
            this.recipeDetails = result.recipe;
          })
        }
      }
    );
  }

  //function to get the value of recipeDetails.Ingredients which is an array
  getValue(ingredientList: []) {
    //we put the array inside a varaiable called recipeDetailsIngredients
    const recipeDetailsIngredients = ingredientList;
    //sending recipeDetailsIngredients to forkifyService and to shoppingList component
    this.forkifyServiceService.getMessage(recipeDetailsIngredients);
  }

}

