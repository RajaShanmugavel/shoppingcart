import { Recipe } from "./recipe.model";

export class RecipeService {

   private recipes: Recipe[] = [ // These images are from internet with redistributable permission granted
        new Recipe('Recipe 1', 'This is simply a test', 'https://c1.staticflickr.com/9/8346/8258253775_d8fa9aa697_b.jpg'),
        new Recipe('Recipe 2', 'This is simply a test', 'http://maxpixel.freegreatpicture.com/static/photo/1x/Sweets-Sweet-Indian-Food-Rasgula-Dessert-577230.jpg'),
        new Recipe('Recipe 3', 'This is simply a test', 'https://upload.wikimedia.org/wikipedia/commons/2/2e/Mmm..._pretty_summer_salad_%286005733739%29.jpg')
    ];

    getRecipes(){
        return this.recipes.slice(); 
    }

}