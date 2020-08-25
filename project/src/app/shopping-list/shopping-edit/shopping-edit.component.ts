import { Component, OnInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';
import { Subject, Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styles: [
  ]
})
export class ShoppingEditComponent implements OnInit, OnDestroy {

  // @ViewChild('nameInput') nameRef: ElementRef;
  // @ViewChild('amountInput', {static: false}) amountRef: ElementRef;
  //@Output() ingredientAdded = new EventEmitter<Ingredient>();

  subscription: Subscription;
  editMode = false;
  editItemIndex: number;

  constructor(private slService: ShoppingListService) { }

  ngOnInit(): void {
    this.subscription = this.slService.starEditing.subscribe(
      (index: number)=> {
        this.editItemIndex = index;
        this.editMode = true;
      }
    );
  }

  onAddItem(form: NgForm){
    const val = form.value;
    const newIngredient = new Ingredient(val.name, val.amount);
    this.slService.addIngredient(newIngredient);
  }

  onDeleteItem(){

  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
