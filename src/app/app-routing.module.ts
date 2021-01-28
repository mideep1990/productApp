import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductEntryComponent } from './product-entry/product-entry.component';

const routes: Routes = [
  {path:'Entry',component:ProductEntryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
