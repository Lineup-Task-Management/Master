"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.TaskListComponent = void 0;
var core_1 = require("@angular/core");
var TaskListComponent = /** @class */ (function () {
    function TaskListComponent() {
    }
    TaskListComponent.prototype.ngOnInit = function () {
        this.idForTask = 3;
        this.taskTitle = '';
        this.tasks = [
            {
                'id': 1,
                'title': "This is Task #1",
                'completed': false,
                'editing': false,
                'description': "Description for Task #1"
            },
            {
                'id': 2,
                'title': "This is Task #2",
                'completed': false,
                'editing': false,
                'description': "Description for Task #2"
            },
        ];
    };
    TaskListComponent.prototype.deleteTask = function (id) {
        this.tasks = this.tasks.filter(function (tasks) { return tasks.id != id; });
    };
    TaskListComponent.prototype.addTaskItem = function () {
        var id = this.idForTask;
        var title = "";
        var description = '';
        var result = prompt("Task Title", title);
        var result1 = prompt("Task Description", description);
        if (result1 !== null && result1 !== "") {
            result1 = " ";
        }
        if (result !== null && result !== "") {
            this.tasks.push({
                id: id,
                title: result,
                completed: false,
                editing: false,
                description: result1
            });
            this.idForTask++;
        }
    };
    TaskListComponent.prototype.edit = function (id) {
        var title = this.tasks[id - 1].title;
        var result = prompt("Edit Task Title", title);
        var result1 = prompt("Edit Task Description", this.tasks[id - 1].description);
        if (result1 !== null && result1 !== "") {
            this.tasks[id - 1].description = result1;
        }
        if (result !== null && result !== "") {
            this.tasks[id - 1].title = result;
        }
    };
    TaskListComponent.prototype.complete = function (id, completed) {
        var taskCompletion = this.tasks[id - 1].completed;
        var promptComplete = confirm("Are you sure you wish to complete?");
        if (promptComplete != null) {
            this.tasks[id - 1].completed = true;
        }
    };
    TaskListComponent = __decorate([
        core_1.Component({
            selector: 'app-task-list',
            templateUrl: './task-list.component.html',
            styleUrls: ['./task-list.component.scss']
        })
    ], TaskListComponent);
    return TaskListComponent;
}());
exports.TaskListComponent = TaskListComponent;