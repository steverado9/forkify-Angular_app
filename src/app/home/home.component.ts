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

  //inject forkifyservice 
  forkifyServiceService = inject(ForkifyServiceService);
  //resultList is annotated to Result[] interface
  resultList: Result[] = [];

  //function to getResult
  getResults(text: string) {
    //it also calls searchforkifyApi in forkifyservice, then get it result and put it inside resultList which is an array
    this.forkifyServiceService.searchForkifyApi(text).then((result: any) => {
      this.resultList = result.recipes
    })
  }

}
