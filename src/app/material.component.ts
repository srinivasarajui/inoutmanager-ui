import { NgModule } from '@angular/core';
import {
    MatButtonModule,
    MatToolbarModule,
} from '@angular/material';

const usedModules = [
    MatButtonModule,
    MatToolbarModule,
];
@NgModule({
  imports: usedModules,
  exports: usedModules,
})
export class MaterialModule { }
