import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrl: './recipe-item.component.css'
})
export class RecipeItemComponent {
  @Input() id: number;
  @Input() image: string;
  @Input() name: string;
  @Input() ingredients: Array<string>;
  @Input() calories: number;
  @Input() rating: number;
  @Input() prepTime: number;
  @Input() cookTime: number;
}
