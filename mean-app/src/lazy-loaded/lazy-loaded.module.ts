import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyComponentComponent } from './lazy-component/lazy-component.component';
import { RouterModule, Routes} from "@angular/router";
import {LazyService} from "./lazy.service";

const route:Routes=[{path:'',component:LazyComponentComponent}];

@NgModule({
  declarations: [LazyComponentComponent],
  imports: [
    RouterModule.forChild(route),
    CommonModule
  ],
  providers:[LazyService]
})
export class LazyLoadedModule { }
