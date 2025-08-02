import { Component, inject, Input } from '@angular/core';
import { TasksService } from '../tasks.service';
import { Task } from './task.model';

@Component({
  selector: 'app-task',
  standalone: false,
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input({ required: true }) task!: Task
  private taskService = inject(TasksService)

  onCompleteTask() {
    this.taskService.removeTask(this.task.id);
  }
}
