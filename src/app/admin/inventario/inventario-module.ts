import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Producto } from './components/producto/producto';
import { CategoriaComponent } from './components/categoria/categoria.component';



@NgModule({
  declarations: [
    Producto,
    CategoriaComponent
  ],
  imports: [
    CommonModule
  ]
})
export class InventarioModule { }
