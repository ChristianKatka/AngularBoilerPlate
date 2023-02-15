import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TasksFeatureContainerComponent } from './tasks-feature.container';

export const tasksRoutes: Routes = [
  {
    path: '',
    component: TasksFeatureContainerComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(tasksRoutes)],
  exports: [RouterModule],
})
export class TasksRoutingModule {}
