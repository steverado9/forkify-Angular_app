import { Injectable } from '@angular/core';
import { Result } from './result';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ForkifyServiceService {

  searchUrl = "https://forkify-api.herokuapp.com/api/search?q=";
  recipeUrl = "https://forkify-api.herokuapp.com/api/get?rId=";
  documentationUrl = "https://forkify-api.herokuapp.com/";

  // function to search for food
  async searchForkifyApi(searchTerm: string): Promise<Result[]> {
    const data = await fetch(this.searchUrl + searchTerm)
    return (await data.json()) ?? [];
  }

  //communication between sibling components
  private messageSource = new BehaviorSubject<string>('');
  currentMessage = this.messageSource.asObservable();
  changeMessage(message: string) {
    this.messageSource.next(message);
  }

  //function to get recipe of food
  async getRecipeDetails(resultId: string) {
    const data = await fetch(this.recipeUrl + resultId)
    return (await data.json()) ?? {};
  }

}
