import { RecipesService } from './../recipes.service';
import { ActivatedRoute } from '@angular/router';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-recipedetails',
  templateUrl: './recipedetails.component.html',
  styleUrl: './recipedetails.component.scss'
})
export class RecipedetailsComponent {

  specificItem : any = {};
  id : any;
  loading : boolean = false;

  constructor(private recipesService: RecipesService, private activatedRoute : ActivatedRoute){
    this.id = this.activatedRoute.snapshot.paramMap.get("id");
    this.getSpecificRecipe();
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  }

  getSpecificRecipe(){
    this.loading = true;
    this.recipesService.getOneRecipe(this.id).subscribe(
      (response) => {
        this.specificItem = response;
        this.loading = false;
      }
    );
  }

}
