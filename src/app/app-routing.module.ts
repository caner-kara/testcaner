import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {HakkimizdaComponent} from './hakkimizda/hakkimizda.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'hakkimizda', component: HakkimizdaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
