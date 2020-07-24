import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-detail',
  templateUrl: './recipes-detail.component.html',
  styleUrls: ['./recipes-detail.component.css']
})
export class RecipesDetailComponent implements OnInit {

  @Input('fromDetail') recipe: Recipe;

  constructor() { }

  ngOnInit(): void {
  }


}
