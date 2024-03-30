import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-recipeitem',
  templateUrl: './recipeitem.component.html',
  styleUrl: './recipeitem.component.scss'
})
export class RecipeitemComponent {

  @Input() data : any = {};

}




//! before "recipesShared" variable in he service
/*
export class RecipeitemComponent {

  @Input() data : any = {};
  @Output() itemId : any = new EventEmitter();

  getIdDetails(id : any){
    this.itemId.emit(id);
  }

}
*/
