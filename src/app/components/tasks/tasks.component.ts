import { Component, OnInit } from '@angular/core';
import { Task } from '../Task';
import { TASKS } from '../mock-tasks';
import { TaskService } from '../../services/task.service'
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  tasks: Task[] = [];

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    //this.tasks = this.taskService.getTasks(); --not observable solution
    this.taskService.getTasks().subscribe((tasks) => this.tasks = tasks)
  }

  deleteTask(task: Task) {
    this.taskService.deleteTask(task).subscribe(() => this.tasks = this.tasks.filter(t => t.id !== task.id));
  }

  toggleReminder(task: Task) {
    const taskAux = { ...task }
    taskAux.reminder = !taskAux.reminder;
    this.taskService.updateTaskReminder(taskAux).subscribe(() => task.reminder = taskAux.reminder);
  }

  addTask(task: Task) {
    this.taskService.createTask(task).subscribe((task) => this.tasks.push(task));
  }
}
