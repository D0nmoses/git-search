import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchformComponent } from './components/search-form/search-form.component';
import { AboutComponent } from './about/about.component';


const routes: Routes = [
  { path: 'search', component: SearchformComponent},
  { path: 'about', component: AboutComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
