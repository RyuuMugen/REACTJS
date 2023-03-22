class ToDo {
    date: Date;
    works: string[];
  
    constructor(date: Date, works: string[]) {
      this.date = date;
      this.works = works;
    }
  
    addWork(work: string) {
      this.works.push(work);
    }
  
    removeWork(work: string) {
      const index = this.works.indexOf(work);
      if (index !== -1) {
        this.works.splice(index, 1);
      }
    }
  }
  
class ToDoList {
    todos: ToDo[];
    constructor() {
      this.todos = [];
    }
  
    addTodo(todo: ToDo) {
      const index = this.todos.findIndex(item => item.date.toDateString() === todo.date.toDateString());
      if (index !== -1) {
        throw new Error('same date avaiable');
      } else {
        this.todos.push(todo);
      }
    }
  
    removeTodoByDate(date: Date) {
      const index = this.todos.findIndex(item => item.date.toDateString() === date.toDateString());
      if (index !== -1) {
        this.todos.splice(index, 1);
      }
    }
  }
  
  const toDoList = new ToDoList();

  const newToDo = new ToDo(new Date(), ["Read a book", "Write a blog post"]);
  toDoList.addTodo(newToDo);
  console.log(toDoList)

  newToDo.removeWork("Write a blog post");
  console.log(newToDo.works);
  