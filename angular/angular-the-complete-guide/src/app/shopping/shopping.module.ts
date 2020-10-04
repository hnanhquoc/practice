import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingComponent } from './shopping.component';
import { ShoppingEditComponent } from './shopping-edit/shopping-edit.component';



@NgModule({
  declarations: [ShoppingComponent, ShoppingEditComponent],
  imports: [
    CommonModule
  ]
})
export class ShoppingModule { }
