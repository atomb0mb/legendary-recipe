import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styles: [
  ]
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameInput') nameRef: ElementRef;
  @ViewChild('amountInput', {static: false}) amountRef: ElementRef;
  //@Output() ingredientAdded = new EventEmitter<Ingredient>();

  constructor(private slService: ShoppingListService) { }

  ngOnInit(): void {

  }

  addIngredient() {
    const newIngredient = new Ingredient(this.nameRef.nativeElement.value, this.amountRef.nativeElement.value);
    this.slService.addIngredient(newIngredient);
   // this.ingredientAdded.emit(new Ingredient(this.nameRef.nativeElement.value, this.amountRef.nativeElement.value) );
  }

  deleteIngredient() {

  }

  clearIngredient(){

  }

}
