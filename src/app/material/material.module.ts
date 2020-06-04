import { NgModule } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from "@angular/material/button";
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import {MatExpansionModule} from '@angular/material/expansion';



const MaterialComponents = [
  MatCardModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatDividerModule,
  MatExpansionModule,
  MatListModule,

]



@NgModule({

  imports: [ MaterialComponents

  ],
  exports:[
MaterialComponents
  ]
})
export class MaterialModule { }
