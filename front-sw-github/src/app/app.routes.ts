import { Routes } from '@angular/router';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { PerfilesGuard } from './guards/perfiles.guard';

export const ROUTES: Routes = [
	{ path: 'usuarios', component: UsuariosComponent},
	{ path: 'usuarios/:login', component: UsuarioComponent},
	{ path: '**', pathMatch:'full', redirectTo:'usuarios' }
] 