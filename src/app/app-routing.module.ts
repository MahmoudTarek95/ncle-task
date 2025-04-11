import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SubscriptionFormComponent } from './components/subscription-form/subscription-form.component';

const routes: Routes = [
  {
    path:'',
    component:HomePageComponent
  },
  {
    path:'subscribe',
    component:SubscriptionFormComponent
  },
  {
    path:'**',
    component:HomePageComponent,
    pathMatch:"full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
