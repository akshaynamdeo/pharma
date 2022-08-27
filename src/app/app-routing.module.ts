import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PriceDetailComponent } from './price-detail/price-detail.component';
import { PriceListSearchComponent } from './price-list-search/price-list-search.component';

const routes: Routes = [
  {path : '', redirectTo : 'priceList',pathMatch:'full'},
  {path : 'priceList', component : PriceListSearchComponent},
  {path : 'priceListDetails/:id', component : PriceDetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
