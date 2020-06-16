import { Injectable } from '@angular/core';
import {BehaviorSubject, Subject} from "rxjs";
import {Project} from "./interfaces/Project";





@Injectable({
  providedIn: 'root'
})
export class TaskLineService {


  projects: Project[];
  private projectsSource = new BehaviorSubject<Project[]>(this.projects);
  currentProjects = this.projectsSource.asObservable();



  constructor() { }

  changeProjects(projects: Project[]){
    this.projectsSource.next(projects)
  }





}
