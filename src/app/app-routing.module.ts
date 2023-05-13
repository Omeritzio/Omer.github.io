import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { FormsComponent } from './forms/forms.component';


const routes: Routes = [
  {path: "about" ,component:AboutComponent},

  {path: "" ,component:AboutComponent},

  {path: "forms" ,component:FormsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
