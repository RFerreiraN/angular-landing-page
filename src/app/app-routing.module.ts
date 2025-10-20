import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductosComponent } from './productos/productos.component';
import { ContactoComponent } from './contacto/contacto.component';
import { ProductoDetalleComponent } from './producto-detalle/producto-detalle.component';

const routes: Routes = [
  { path: '', component : HomeComponent },
  { path : 'productos' , component : ProductosComponent },
  { path : 'productos/:productoID' , component : ProductoDetalleComponent},
  { path : 'contacto' , component : ContactoComponent },
  { path : '**' , redirectTo : ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
