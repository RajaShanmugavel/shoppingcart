import { Recipe } from "./recipe.model";
import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";

export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();
    private recipes: Recipe[] = [ // These images are from internet with redistributable permission granted
        new Recipe('Brownie',
            'Delicious Brownie',
            'https://c1.staticflickr.com/9/8346/8258253775_d8fa9aa697_b.jpg',
            [new Ingredient('Sugar', 2), new Ingredient('Flour', 3),new Ingredient('Coco powder', 1)]),
        new Recipe('Rasagula',
            'Mouthwatering kolkatta rasagulla',
            'http://maxpixel.freegreatpicture.com/static/photo/1x/Sweets-Sweet-Indian-Food-Rasgula-Dessert-577230.jpg',
            [new Ingredient('Milk', 5), new Ingredient('Sugar', 2), new Ingredient('Flour', 1), new Ingredient('Coconut', 1)]),
        new Recipe('Pasta',
            'Prefectly made Italian Pasta',
            'https://upload.wikimedia.org/wikipedia/commons/2/2e/Mmm..._pretty_summer_salad_%286005733739%29.jpg',
            [new Ingredient('Pasta', 25), new Ingredient('Cheese', 2), new Ingredient('Cauliflower', 0.5), new Ingredient('Tomato', 5)])
    ];

    getRecipes() {
        return this.recipes.slice();
    }

}