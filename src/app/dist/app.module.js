"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var task_list_component_1 = require("./components/task-list/task-list.component");
var animations_1 = require("@angular/platform-browser/animations");
var material_module_1 = require("./material/material.module");
var light_dark_component_1 = require("src/app/components/light-dark/light-dark.component");
var task_line_service_1 = require("./service/task-line.service");
var header_component_1 = require("./components/header/header.component");
var task_operations_component_1 = require("./components/projects/task-operations.component");
var drag_drop_1 = require("@angular/cdk/drag-drop");
var dueDate_component_1 = require("./components/dueDate/dueDate.component");
var side_nav_component_1 = require("./components/side-nav/side-nav.component");
var common_1 = require("../../node_modules/@angular/common");
var messaging_service_1 = require("./service/messaging.service");
var messaging_1 = require("@angular/fire/messaging");
var database_1 = require("@angular/fire/database");
var auth_1 = require("@angular/fire/auth");
var fire_1 = require("@angular/fire");
var environment_1 = require("../environments/environment");
var firestore_1 = require("@angular/fire/firestore");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                task_list_component_1.TaskListComponent,
                light_dark_component_1.LightDarkComponent,
                header_component_1.HeaderComponent,
                task_operations_component_1.TaskOperationsComponent,
                dueDate_component_1.DueDateComponent,
                side_nav_component_1.SideNavComponent
            ],
            imports: [
                app_routing_module_1.AppRoutingModule,
                platform_browser_1.BrowserModule,
                animations_1.BrowserAnimationsModule,
                material_module_1.MaterialModule,
                forms_1.FormsModule,
                drag_drop_1.DragDropModule,
                database_1.AngularFireDatabaseModule,
                auth_1.AngularFireAuthModule,
                messaging_1.AngularFireMessagingModule,
                fire_1.AngularFireModule.initializeApp(environment_1.environment.firebase),
                firestore_1.AngularFirestoreModule,
            ],
            providers: [task_line_service_1.TaskLineService, messaging_service_1.MessagingService, common_1.AsyncPipe],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
