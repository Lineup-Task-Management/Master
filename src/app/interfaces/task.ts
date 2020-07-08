export interface Prototype {
  getClone();
}

export class Task implements Prototype {

  id: string;
  title: string;
  completed: boolean;
  editing: boolean;
  description: string;
constructor(id: string, title: string, description: string, completed: boolean, editing: boolean) {

    this.id = id;
    this.title = title;
    this.completed = completed;
    this.editing = editing;
    this.description = description;
}


getClone(): Task {
  const cloned = Object.create(Task || null);
  Object.keys(this).map((key: string) => {
    cloned[key] = this[key];
  });
  return cloned;
}


}
