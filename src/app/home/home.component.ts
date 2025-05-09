import { Component } from '@angular/core';
import { ResultComponent } from '../result/result.component';
import { RecipeComponent } from '../recipe/recipe.component';
import { ShoppingListComponent } from '../shopping-list/shopping-list.component';

@Component({
  selector: 'app-home',
  imports: [ResultComponent, RecipeComponent, ShoppingListComponent],
  templateUrl: './home.component.html', 
  styleUrl: './home.component.css'
})
export class HomeComponent {
  imgUrl = 'https://forkify-your-recipe.netlify.app/img/logo.svg';
  searchUrl = "https://forkify-api.herokuapp.com/api/search?q=";
  recipeUrl = "https://forkify-api.herokuapp.com/api/get?rId=";
  documentationUrl = "https://forkify-api.herokuapp.com/";

  food: string = '';
  fullUrl!: string; 
  

  filterResults(text: string) {
    console.log(text);
    this.food = text.toLowerCase();
    this.fullUrl = this.searchUrl + this.food;
    
  }

  searchForkifyApi() {

  }

  
}
