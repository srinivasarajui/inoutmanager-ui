import { NgModule } from '@angular/core';
import {
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatGridListModule,
    MatCardModule,
    MatInputModule,
    MatListModule,
} from '@angular/material';

const usedModules = [
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatGridListModule,
    MatCardModule,
    MatInputModule,
    MatListModule,
];
@NgModule({
  imports: usedModules,
  exports: usedModules,
})
export class MaterialModule { }
