import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {GreetingPageComponent} from "../components/greeting-page/greeting-page.component";
import {WorksheetAccessGuard} from "../guard/guard";


const routes: Routes = [

  {
    path: '',
    redirectTo: 'greeting-page',
    pathMatch: 'full',
  },
  {
    path: 'greeting-page',
    component: GreetingPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers:[WorksheetAccessGuard],
})

export class AppRoutingModule {
}
