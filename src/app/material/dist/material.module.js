"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.MaterialModule = void 0;
var core_1 = require("@angular/core");
var card_1 = require("@angular/material/card");
var button_1 = require("@angular/material/button");
var button_toggle_1 = require("@angular/material/button-toggle");
var divider_1 = require("@angular/material/divider");
var list_1 = require("@angular/material/list");
var expansion_1 = require("@angular/material/expansion");
var forms_1 = require("@angular/forms");
var select_1 = require("@angular/material/select");
var input_1 = require("@angular/material/input");
var menu_1 = require("@angular/material/menu");
var dialog_1 = require("@angular/material/dialog");
var toolbar_1 = require("@angular/material/toolbar");
var icon_1 = require("@angular/material/icon");
var tooltip_1 = require("@angular/material/tooltip");
var progress_bar_1 = require("@angular/material/progress-bar");
var slide_toggle_1 = require("@angular/material/slide-toggle");
var checkbox_1 = require("@angular/material/checkbox");
var datepicker_1 = require("@angular/material/datepicker");
var core_2 = require("@angular/material/core");
var core_3 = require("@angular/material/core");
var form_field_1 = require("@angular/material/form-field");
var MaterialComponents = [
    card_1.MatCardModule,
    button_1.MatButtonModule,
    button_toggle_1.MatButtonToggleModule,
    divider_1.MatDividerModule,
    expansion_1.MatExpansionModule,
    list_1.MatListModule,
    select_1.MatSelectModule,
    input_1.MatInputModule,
    forms_1.FormsModule,
    progress_bar_1.MatProgressBarModule,
    tooltip_1.MatTooltipModule,
    icon_1.MatIconModule,
    toolbar_1.MatToolbarModule,
    dialog_1.MatDialogModule,
    menu_1.MatMenuModule,
    slide_toggle_1.MatSlideToggleModule,
    checkbox_1.MatCheckboxModule,
    core_2.MatNativeDateModule,
    datepicker_1.MatDatepickerModule,
    core_3.MatRippleModule,
    form_field_1.MatFormFieldModule
];
var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        core_1.NgModule({
            imports: [
                MaterialComponents,
            ],
            exports: [
                MaterialComponents,
            ]
        })
    ], MaterialModule);
    return MaterialModule;
}());
exports.MaterialModule = MaterialModule;
