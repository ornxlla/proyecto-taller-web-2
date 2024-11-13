import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TareaComponent } from './pages/tarea/tarea.component';
import { LoginComponent } from './pages/login/login.component';
import { AddEditTareaComponent } from './pages/tarea/components/add-edit-tarea/add-edit-tarea.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'tareas', component: TareaComponent },
  { path: 'login', component: LoginComponent },
  { path: 'tareas/edit/:id', component:AddEditTareaComponent},
  { path: 'tareas/add/:id', component:AddEditTareaComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // Usar forRoot en el módulo principal
  exports: [RouterModule],
})
export class AppRoutingModule { }