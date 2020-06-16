import { Task } from "./task";

export class Project{
  id:number;
  title:string;
  tasks: Task[];
  constructor(id:number,title:string){
    this.id = id;
    this.title=title;
    this.tasks = [];
  }
}
