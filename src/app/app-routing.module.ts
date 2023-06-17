import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LearningPageComponent } from './pages/learning-page/learning-page.component';
import { StartPageComponent } from './pages/start-page/start-page.component';

const routes: Routes = [
  { path: 'learn', component: LearningPageComponent },
  { path: '', component: StartPageComponent },
  // other routes...
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
