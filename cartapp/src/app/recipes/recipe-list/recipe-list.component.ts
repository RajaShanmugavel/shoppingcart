import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Recipe 1', 'This is simply a test','https://c1.staticflickr.com/9/8346/8258253775_d8fa9aa697_b.jpg'),
    new Recipe('Recipe 2', 'This is simply a test','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQM_sRXmjAX8jmBH8daGPssaylbN2uNixTcWfSzbX7KHP_iKbfOFg'),
    new Recipe('Recipe 3', 'This is simply a test','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxrrfBmVYr6eyEN5W0XwYAJkOeLw7P-yrlrP-SCVHmRROeFVRpAQ')
  ];

  constructor() { }

  ngOnInit() {
  }

}
