import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import MealFormComponent from './features/meal-form/meal-form.component';
import MealListComponent from './features/meal-list/meal-list.component';
import { cateringFirmEnvironmentGuard } from './guards/catering-firm-environment.guard';

const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent,
  },
  {
    path: 'meal',
    component: MealListComponent,
  },
  {
    path: 'meal/create',
    component: MealFormComponent,
    canActivate: [cateringFirmEnvironmentGuard],
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
