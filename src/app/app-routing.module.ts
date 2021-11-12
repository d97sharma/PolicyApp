import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPolicyComponent } from './add-policy/add-policy.component';
import { DataVisualizerComponent } from './data-visualizer/data-visualizer.component';
import { DeletePolicyComponent } from './delete-policy/delete-policy.component';
import { HomePageComponent } from './home-page/home-page.component';
import { SearchPolicyComponent } from './search-policy/search-policy.component';
import { UpdatePolicyComponent } from './update-policy/update-policy.component';

const routes: Routes = [
  {path : '' , redirectTo:'/home',pathMatch : 'full'},
  { path: 'home', component: HomePageComponent },
  { path: 'search', component: SearchPolicyComponent },
  { path: 'add', component: AddPolicyComponent },
  { path: 'update', component: UpdatePolicyComponent },
  { path: 'delete', component: DeletePolicyComponent },
  {path: 'data', component : DataVisualizerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
