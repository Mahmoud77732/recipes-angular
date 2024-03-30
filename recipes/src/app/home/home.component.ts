import { RecipesService } from './../recipes.service';
import { Component} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  recipes: any[] = [];
  loading: boolean = false;

  constructor(private recipesService: RecipesService) {
    this.getAllRecipes();
  }

  getAllRecipes() {
    this.loading = true;
    this.recipesService.getRecipes().subscribe(
      (response: any) => {
        this.recipes = response;
        this.loading = false;
      }
    );
  }

}



