import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrudUsuarioComponent } from './crud-usuario/crud-usuario.component';
import { CrudVehiculoComponent } from './crud-vehiculo/crud-vehiculo.component';

const routes: Routes = [
  { path: "", component:CrudUsuarioComponent},
  { path:"usuarios", component:CrudUsuarioComponent},
  { path: "vehiculos", component:CrudVehiculoComponent} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  

exports: [RouterModule]
})
export class AppRoutingModule { }
