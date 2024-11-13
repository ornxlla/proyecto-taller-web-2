import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { MatToolbarModule } from '@angular/material/toolbar';  
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TareaComponent } from './pages/tarea/tarea.component';
import { HeaderComponent } from './pages/header/header.component';
import { AddEditTareaComponent } from './pages/tarea/components/add-edit-tarea/add-edit-tarea.component';
import { LoginComponent } from './pages/login/login.component';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table'; // Import MatTableModule
import { MatPaginatorModule } from '@angular/material/paginator'; // Optional if using paginator
import { MatSortModule } from '@angular/material/sort'; // Optional if using sorting
import { MatIconModule } from '@angular/material/icon';
import { TareaModule } from './pages/tarea/tarea.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MatCheckbox } from '@angular/material/checkbox';
import { LoginModule } from './pages/login/login.module';
@NgModule({
  declarations: [
    AppComponent,
    TareaComponent,
    HeaderComponent,
   
  ],
  imports: [
    TareaModule,
    BrowserModule,
    BrowserAnimationsModule, // Add BrowserAnimationsModule
    AppRoutingModule,
    MatToolbarModule,
    MatCardModule,
    MatTableModule, // Add MatTableModule here
    MatPaginatorModule, // Optional
    MatSortModule, // Optional
    MatIconModule,
    AddEditTareaComponent,
    HttpClientModule,
    MatCheckbox,
    LoginModule,
    LoginComponent,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
