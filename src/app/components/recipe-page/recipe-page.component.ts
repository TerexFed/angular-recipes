import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipesService } from '../../services/recipes.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-recipe-page',
  templateUrl: './recipe-page.component.html',
  styleUrl: './recipe-page.component.css'
})
export class RecipePageComponent implements OnInit {
  constructor(private route: ActivatedRoute, public recipeService: RecipesService, public location: Location) { }

  ngOnInit(): void {
    this.recipeService.getRecipe(this.route.snapshot.params.id);
  }
}
