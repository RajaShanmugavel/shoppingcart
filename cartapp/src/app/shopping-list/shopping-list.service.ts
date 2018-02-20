import { Ingredient } from "../shared/ingredient.model";
import { EventEmitter } from "@angular/core";

export class ShoppingListService {
    ingredientsChanged = new EventEmitter<Ingredient[]>();
    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10),
      ];

      // Another comment...... :-/
      getIngredients(){
          return this.ingredients.slice();
      }

      // This is the test comment
      addIngredient(ingredient: Ingredient){
        this.ingredients.push(ingredient);
        this.ingredientsChanged.emit(this.ingredients.slice());
      }

      addIngredients(ingredients : Ingredient[]){
        //   for(let ingredient of ingredients){
        //       this.addIngredient(ingredient);
        //   }
        this.ingredients.push(...ingredients); // This line does the same as above for loop "..." is a spread operator which SPREADS array to single items.
                                               // Refer https://angular-2-training-book.rangle.io/handout/features/spread_and_rest.html
        this.ingredientsChanged.emit(this.ingredients.slice());
      }
}