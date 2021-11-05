import { Component, OnInit } from '@angular/core';
import {TaskService} from '../../services/task.service';
import {Task} from '../../Task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks: Task[] = []; // Empty array of Tasks


  // To use services, put in constructor
  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    // this.tasks = this.taskService.getTasks();
    this.taskService.getTasks().subscribe((tasks) => (this.tasks = tasks)); // Subscribe used for observables (think promises)
  }

  deleteTask(task: Task) {
    this.taskService.deleteTask(task).subscribe(() => (this.tasks = this.tasks.filter(t => t.id !== task.id)))
  }

  toggleReminder(task: Task) {
    task.reminder = !task.reminder;
    this.taskService.updateTaskReminder(task).subscribe()
  }

}
