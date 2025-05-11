import { Component } from '@angular/core';
import { ForkifyServiceService } from '../forkify-service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-shopping-list',
  imports: [CommonModule],
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.css'
})
export class ShoppingListComponent {
  recipeList: string[] =[]
  constructor(private forkifyServiceService: ForkifyServiceService) {}

  //recieving data from forkify service
  ngOnInit() {
    this.forkifyServiceService.recipeDetailsIngredient.subscribe(
      (msg) => {
        //putting the message inside a variable of recipeList which is an array
          this.recipeList = msg;
          // console.log(this.recipeList);
      }
    );
  }
}
