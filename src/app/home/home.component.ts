import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResultComponent } from '../result/result.component';
import { RecipeComponent } from '../recipe/recipe.component';
import { ShoppingListComponent } from '../shopping-list/shopping-list.component';
import { ForkifyServiceService } from '../forkify-service.service';
import { Result } from '../result';

@Component({
  selector: 'app-home',
  imports: [CommonModule, ResultComponent, RecipeComponent, ShoppingListComponent],
  templateUrl: './home.component.html', 
  styleUrl: './home.component.css'
})



export class HomeComponent {
  imgUrl = 'https://forkify-your-recipe.netlify.app/img/logo.svg';
  
  result: Result[] = [];
  forkifyServiceService = inject(ForkifyServiceService);
  resultList: Result[]= [];


  getResults(text: string) {
    this.forkifyServiceService.searchForkifyApi(text).then((result: any) => {
      this.resultList = result.recipes
      console.log(this.resultList);
    })
  }

}
