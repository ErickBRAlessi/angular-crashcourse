import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Task } from '../components/Task';
import { TASKS } from '../components/mock-tasks';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private apiUrl = 'http://localhost:5000/tasks'

  constructor(private http: HttpClient) { }

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.apiUrl)
  }

  
  
  /* --not observable solution --
  getTasks(): Observable<Task[]> {
    return of(TASKS);
  }
  */

  /* --not observable solution --
  getTasks() : Task[] {
    return TASKS;
  }
  */
}
