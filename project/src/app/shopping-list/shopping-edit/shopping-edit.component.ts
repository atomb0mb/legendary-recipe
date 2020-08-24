import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styles: [
  ]
})
export class ShoppingEditComponent implements OnInit {

  // @ViewChild('nameInput') nameRef: ElementRef;
  // @ViewChild('amountInput', {static: false}) amountRef: ElementRef;
  //@Output() ingredientAdded = new EventEmitter<Ingredient>();

  constructor(private slService: ShoppingListService) { }

  ngOnInit(): void {

  }

  deleteIngredient() {

  }

  clearIngredient(){

  }

  onAddItem(form: NgForm){
    const val = form.value;
    const newIngredient = new Ingredient(val.name, val.amount);
    this.slService.addIngredient(newIngredient);
  }

}
