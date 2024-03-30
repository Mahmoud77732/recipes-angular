import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  baseUrl : string = "https://api.sampleapis.com/recipes/recipes";

  constructor(private httpClient : HttpClient) {

  }

  getRecipes() : Observable<any>{
    return this.httpClient.get(this.baseUrl);
  }

  getOneRecipe(id : any) : Observable<any>{
    return this.httpClient.get(this.baseUrl + `/${id}`);
  }

}
