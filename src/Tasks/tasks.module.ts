import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { components } from '.';
import { MaterialModule } from '../material.module';
import { TasksRoutingModule } from './tasks-routing.module';

@NgModule({
  imports: [CommonModule, MaterialModule, TasksRoutingModule, SharedModule],
  declarations: [...components],
  exports: [...components],
})
export class TasksModule {}
