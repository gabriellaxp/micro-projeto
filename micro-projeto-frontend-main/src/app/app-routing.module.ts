import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListUfComponentComponent } from './list-uf-component/list-uf-component.component';

const routes: Routes = [
  {
    path: '',
    component: ListUfComponentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
