import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CrudUsuarioComponent } from './crud-usuario/crud-usuario.component';
import { CrudVehiculoComponent } from './crud-vehiculo/crud-vehiculo.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {FormsModule} from "@angular/forms";
import {MatTableModule} from '@angular/material/table';
import { LayoutComponent } from './layout/layout.component';
import { ToolbarComponent } from './layout/toolbar/toolbar.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { FooterComponent } from './layout/footer/footer.component';
import { ContentComponent } from './layout/content/content.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import { EditorNombreComponent } from './crud-usuario/editor-nombre/editor-nombre.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    CrudUsuarioComponent,
    CrudVehiculoComponent,
    LayoutComponent,
    ToolbarComponent,
    SidebarComponent,
    FooterComponent,
    ContentComponent,
    EditorNombreComponent
    //aqui se agregan todos los componentes
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatIconModule,
    FormsModule,
    MatTableModule,
    MatToolbarModule,
    MatButtonModule,
    HttpClientModule,

    //aqui se agregan todos los componentes necesarios
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
