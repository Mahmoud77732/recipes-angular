import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { RecipedetailsComponent } from './recipedetails/recipedetails.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch : 'full'},
  {path: 'home', component : HomeComponent},
  {path: 'details/:id', component : RecipedetailsComponent},
  {path: '**', component : NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
