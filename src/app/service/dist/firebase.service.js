"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.FirebaseService = void 0;
var core_1 = require("@angular/core");
var FirebaseService = /** @class */ (function () {
    function FirebaseService(db) {
        this.db = db;
    }
    /* getTasks(){
 
         return this.db.collection('task').snapshotChanges();
       }
     */
    FirebaseService.prototype.getTasks = function () {
        return this.db.collection('Projects/Tasks/Tasks').snapshotChanges();
    };
    FirebaseService.prototype.getProjects = function () {
        return this.db.collection('Projects').snapshotChanges();
    };
    FirebaseService.prototype.deleteTask = function (data) {
        return this.db.collection('Projects/Tasks/Tasks').doc(data.payload.doc.id)["delete"]();
    };
    FirebaseService.prototype.completeTask = function (data) {
        return this.db.collection('Projects/Tasks/Tasks').doc(data.payload.doc.id).set({ completed: true }, { merge: true });
    };
    FirebaseService.prototype.addTask = function (title, description, completed) {
        return this.db.collection('Projects/Tasks/Tasks').add({
            //id : id,
            title: title,
            description: description,
            completed: completed
        });
    };
    FirebaseService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], FirebaseService);
    return FirebaseService;
}());
exports.FirebaseService = FirebaseService;
