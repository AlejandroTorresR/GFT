import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const PublicRoutes: Routes = []

@NgModule({
  imports: [RouterModule.forRoot(PublicRoutes)],
  exports: [RouterModule]
})
export class PublicRouting { }