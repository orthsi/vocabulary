import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LearningPageComponent } from './learning-page/learning-page.component';

const routes: Routes = [
  { path: 'learn', component: LearningPageComponent },
  // other routes...
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
