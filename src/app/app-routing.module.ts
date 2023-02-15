import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TasksFeatureContainerComponent } from 'src/Tasks/tasks-feature.container';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'tasks',
  },
  {
    path: 'tasks',
    component: TasksFeatureContainerComponent,
  },
  {
    path: 'calories',
    loadChildren: () => import('../Calories/calories.module').then(m => m.CaloriesModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
