var ToDo = /** @class */ (function () {
    function ToDo(date, works) {
        this.date = date;
        this.works = works;
    }
    ToDo.prototype.addWork = function (work) {
        this.works.push(work);
    };
    ToDo.prototype.removeWork = function (work) {
        var index = this.works.indexOf(work);
        if (index !== -1) {
            this.works.splice(index, 1);
        }
    };
    return ToDo;
}());
var ToDoList = /** @class */ (function () {
    function ToDoList() {
        this.todos = [];
    }
    ToDoList.prototype.addTodo = function (todo) {
        var index = this.todos.findIndex(function (item) { return item.date.toDateString() === todo.date.toDateString(); });
        if (index !== -1) {
            throw new Error('same date avaiable');
        }
        else {
            this.todos.push(todo);
        }
    };
    ToDoList.prototype.removeTodoByDate = function (date) {
        var index = this.todos.findIndex(function (item) { return item.date.toDateString() === date.toDateString(); });
        if (index !== -1) {
            this.todos.splice(index, 1);
        }
    };
    return ToDoList;
}());
var toDoList = new ToDoList();
var newToDo = new ToDo(new Date(), ["Read a book", "Write a blog post"]);
toDoList.addTodo(newToDo);
console.log(toDoList);
newToDo.removeWork("Write a blog post");
console.log(newToDo);
