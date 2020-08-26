import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
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


  constructor(private route: ActivatedRoute, private recipeService: RecipeService, private router: Router){

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
            'name': new FormControl(ingredient.name, Validators.required),
            'amount': new FormControl(ingredient.amount, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
          }))
        } 
      }
    }

    this.recipeForm = new FormGroup({
      'name': new FormControl(recipeName, Validators.required),
      'imagePath': new FormControl(recipePath, Validators.required),
      'description': new FormControl(recipeDes, Validators.required),
      'ingredients': recipeIngredient,
    });
  }


  get controls() { // a getter!
    return (<FormArray>this.recipeForm.get('ingredients')).controls;
  }

  // Remember to have type = button and not submit so that whenever you add ingredient, it wont submit too
  onAddIngredient() {
    (<FormArray>this.recipeForm.get('ingredients')).push(new FormGroup({
      'name': new FormControl(null, Validators.required),
      'amount': new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
    }))
  }

  onSubmit() {
    // const newRecipe = new Recipe(
    //   this.recipeForm.value['name'],
    //   this.recipeForm.value['imagePath'],
    //   this.recipeForm.value['description'],
    //   this.recipeForm.value['ingredients']);

    // Similar since this is the same object as above
    
    const newRecipe = this.recipeForm.value;
    //console.log(this.recipeForm.value)
    if(this.editMode){
      this.recipeService.updateRecipe(this.id, newRecipe);
      //console.log("This is editMode")
      //console.log(newRecipe);
    } else {
      this.recipeService.addRecipe(newRecipe);
      //console.log(newRecipe);
    }
    this.router.navigate([''], {relativeTo: this.route})
  }

  cancel() {
    this.router.navigate([''], {relativeTo: this.route})
  }


}
