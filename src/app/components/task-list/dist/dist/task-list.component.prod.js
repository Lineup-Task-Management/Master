"use strict";function _typeof(t){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var __decorate=function(t,e,o,s){var i,r=arguments.length,n=r<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,o):s;if("object"===("undefined"==typeof Reflect?"undefined":_typeof(Reflect))&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,o,s);else for(var c=t.length-1;0<=c;c--)(i=t[c])&&(n=(r<3?i(n):3<r?i(e,o,n):i(e,o))||n);return 3<r&&n&&Object.defineProperty(e,o,n),n};exports.__esModule=!0,exports.TaskListComponent=void 0;var core_1=require("@angular/core"),drag_drop_1=require("@angular/cdk/drag-drop"),TaskListComponent=function(){function t(t){this.tlService=t,this.theme=!1}return t.prototype.ngOnInit=function(){var e=this;this.tlService.currentProjects.subscribe(function(t){return e.projects=t}),this.idForTask=1,this.taskTitle="",this.tasks=[{id:this.idForTask++,title:"This is Task #1",completed:!1,editing:!1,description:"Description for Task #1"},{id:this.idForTask++,title:"This is Task #2",completed:!1,editing:!1,description:"Description for Task #2"}],this.projects=[{id:0,title:"this is a test",tasks:this.tasks}],this.tlService.changeProjects(this.projects)},t.prototype.deleteTask=function(e){this.projects[this.indexForProj].tasks=this.projects[this.indexForProj].tasks.filter(function(t){return t.id!=e}),this.tlService.changeProjects(this.projects)},t.prototype.addTaskItem=function(){var t,e=this.idForTask,o=prompt("Task Title","");null!==o&&""!==o&&(t=prompt("Task Description",""),null!==o&&""!==o&&(this.projects[this.indexForProj].tasks.push({id:e,title:o,completed:!1,editing:!1,description:t}),this.idForTask++),this.tlService.changeProjects(this.projects))},t.prototype.edit=function(t){var e=this.tasks[t-1].title,o=prompt("Edit Task Title",e),s=prompt("Edit Task Description",this.tasks[t-1].description);null!==s&&""!==s&&(this.tasks[t-1].description=s),null!==o&&""!==o&&(this.tasks[t-1].title=o)},t.prototype.complete=function(t,e){this.projects[this.indexForProj].tasks[t-1].completed;null!=confirm("Are you sure you wish to complete?")&&(this.projects[this.indexForProj].tasks[t-1].completed=!0)},t.prototype.drop=function(t){drag_drop_1.moveItemInArray(this.tasks,t.previousIndex,t.currentIndex)},__decorate([core_1.Input()],t.prototype,"indexForProj"),t=__decorate([core_1.Component({selector:"app-task-list",templateUrl:"./task-list.component.html",styleUrls:["./task-list.component.scss"]})],t)}();exports.TaskListComponent=TaskListComponent;