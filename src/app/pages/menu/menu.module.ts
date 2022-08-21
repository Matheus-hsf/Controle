import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu.component';
import { MenuService } from './menu.service';



@NgModule({
  declarations: [
    MenuComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MenuComponent,
  ]
})
export class MenuModule { }
