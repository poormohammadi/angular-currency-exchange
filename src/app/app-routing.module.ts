import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/exchange',
    pathMatch: 'full',
  },
  {
    path: 'exchange',
    loadChildren: () => import("./exchange/exchange.module").then(m => m.ExchangeModule),
  },
  {
    path: '*',
    redirectTo: '/exchange'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
