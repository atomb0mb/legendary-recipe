import { Ingredient } from '../shared/ingredient.model';

export class Recipe {
  public name: string; // name of the recipe
  public description: string; // description of the recipe
  public imagePath: string; // url or path of the image for the recipe
  public ingredients: Ingredient[]; // ingredients array

  constructor(name: string, desc: string, imagePath: string, ingredients: Ingredient[]) {
    this.name = name;
    this.description = desc;
    this.imagePath = imagePath;
    this.ingredients = ingredients;
  }
}
