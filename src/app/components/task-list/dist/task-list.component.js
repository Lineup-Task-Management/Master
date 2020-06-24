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
var drag_drop_1 = require("@angular/cdk/drag-drop");
var TaskListComponent = /** @class */ (function () {
    function TaskListComponent(tlService) {
        this.tlService = tlService;
        this.theme = false;
    }
    TaskListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.tlService.currentProjects.subscribe(function (projects) { return _this.projects = projects; });
        this.idForTask = 1;
        this.taskTitle = '';
        this.tasks = [
            {
                'id': this.idForTask++,
                'title': "This is Task #1",
                'completed': false,
                'editing': false,
                'description': "Description for Task #1"
            },
            {
                'id': this.idForTask++,
                'title': "This is Task #2",
                'completed': false,
                'editing': false,
                'description': "Description for Task #2"
            },
        ];
        this.projects = [
            {
                'id': 0,
                'title': "this is a test",
                'tasks': this.tasks
            }
        ];
        this.tlService.changeProjects(this.projects);
    };
    TaskListComponent.prototype.deleteTask = function (id) {
        this.projects[this.indexForProj].tasks = this.projects[this.indexForProj].tasks.filter(function (tasks) { return tasks.id != id; });
        this.tlService.changeProjects(this.projects);
    };
    TaskListComponent.prototype.addTaskItem = function () {
        var id = this.idForTask;
        var title = "";
        var description = '';
        var result = prompt("Task Title", title);
        if (result === null || result === "")
            return;
        var result1 = prompt("Task Description", description);
        if (result !== null && result !== "") {
            this.projects[this.indexForProj].tasks.push({
                id: id,
                title: result,
                completed: false,
                editing: false,
                description: result1
            });
            this.idForTask++;
        }
        this.tlService.changeProjects(this.projects);
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
        var taskCompletion = this.projects[this.indexForProj].tasks[id - 1].completed;
        var promptComplete = confirm("Are you sure you wish to complete?");
        if (promptComplete != null) {
            this.projects[this.indexForProj].tasks[id - 1].completed = true;
        }
    };
    TaskListComponent.prototype.drop = function (event) {
        drag_drop_1.moveItemInArray(this.tasks, event.previousIndex, event.currentIndex);
    };
    __decorate([
        core_1.Input()
    ], TaskListComponent.prototype, "indexForProj");
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
