import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { FormGroup, FormControl, FormArray } from '@angular/forms';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {

  id: number;
  editMode = false;
  recipeForm: FormGroup;


  constructor(private route: ActivatedRoute, private recipeService: RecipeService){

  }

  ngOnInit(): void {
    this.route.params.subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.editMode = params['id'] != null;
          //console.log(this.editMode);
          this.initForm();
        }
    );
  }

  private initForm(){
    
    let recipeName = '';
    let recipePath = '';
    let recipeDes = '';
    let recipeIngredient = new FormArray([]);

    if(this.editMode){
      const recipe = this.recipeService.getRecipe(this.id);
      recipeName = recipe.name;
      recipePath = recipe.imagePath;
      recipeDes = recipe.description;
      if(recipe['ingredients']) {
        for(let ingredient of recipe.ingredients) {
          recipeIngredient.push( new FormGroup({
            'name': new FormControl(ingredient.name),
            'amount': new FormControl(ingredient.amount),
          }))
        } 
      }
    }

    this.recipeForm = new FormGroup({
      'name': new FormControl(recipeName),
      'imagePath': new FormControl(recipePath),
      'description': new FormControl(recipeDes),
      'ingredients': recipeIngredient,
    });
  }


  get controls() { // a getter!
    return (<FormArray>this.recipeForm.get('ingredients')).controls;
  }

  // Remember to have type = button and not submit so that whenever you add ingredient, it wont submit too
  onAddIngredient() {
    (<FormArray>this.recipeForm.get('ingredients')).push(new FormGroup({
      'name': new FormControl(),
      'amount': new FormControl(),
    }))
  }

  onSubmit() {
    console.log(this.recipeForm.value);
  }

}
