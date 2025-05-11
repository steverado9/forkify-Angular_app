import { Injectable } from '@angular/core';
import { Result } from './result';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ForkifyServiceService {

  searchUrl = "https://forkify-api.herokuapp.com/api/search?q=";
  recipeUrl = "https://forkify-api.herokuapp.com/api/get?rId=";

  //an async function to search for food and returns a promise, which is in json
  async searchForkifyApi(searchTerm: string): Promise<Result[]> {
    const data = await fetch(this.searchUrl + searchTerm)
    return (await data.json()) ?? [];
  }

  //communication between result and recipe components(string of id)
  private messageSource = new BehaviorSubject<string>('');
  currentMessage = this.messageSource.asObservable();
  changeMessage(message: string) {
    this.messageSource.next(message);
  }

  //async function to get recipe of food and returns a json data
  async getRecipeDetails(resultId: string) {
    const data = await fetch(this.recipeUrl + resultId)
    return (await data.json()) ?? {};
  }

  //getting data from recipe component, which is an array and we are going to call it in shopping list
  private recipeMessage = new BehaviorSubject<string[]>([]);
  recipeDetailsIngredient = this.recipeMessage.asObservable();
  getMessage(message: []) {
    this.recipeMessage.next(message);
  }
}
