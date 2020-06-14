import { NgModule } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import {MatExpansionModule} from '@angular/material/expansion';
import {FormsModule} from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';

import { MatMenuModule } from '@angular/material/menu';
import { MatDialogModule } from '@angular/material/dialog';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from "@angular/material/icon";
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {MatCheckboxModule} from '@angular/material/checkbox';






const MaterialComponents = [
  MatCardModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatDividerModule,
  MatExpansionModule,
  MatListModule,
  MatSelectModule,
  MatInputModule,
  FormsModule,
  MatProgressBarModule,
  MatTooltipModule,
  MatIconModule,
  MatToolbarModule,
  MatDialogModule,
  MatMenuModule,
  MatSlideToggleModule,
  MatCheckboxModule
]



@NgModule({

  imports: [ MaterialComponents

  ],
  exports:[
MaterialComponents
  ]
})
export class MaterialModule { }
