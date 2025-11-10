import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing-module';
import { PerfilComponent } from './components/perfil/perfil.component';
import { ClienteComponent } from './components/cliente/cliente.component';
import { RouterModule } from '@angular/router'; 
import { LayoutComponent } from './layout/layout.component';
import { AppLayoutModule } from './layout/app.layout.module';

@NgModule({
  declarations: [
      LayoutComponent,
    ClienteComponent  // ✅ este NO es standalone
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
     RouterModule, 
    PerfilComponent,
    AppLayoutModule  // ✅ este SÍ es standalone
  ]
})
export class AdminModule {}
