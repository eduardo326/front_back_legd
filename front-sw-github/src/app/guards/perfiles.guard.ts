import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UsuariosService } from '../services/usuarios.service';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class PerfilesGuard {
  constructor(private usuerioService: UsuariosService,
    private router: Router) { }

  async canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Promise<Observable<boolean> | Promise<boolean> | boolean> {

    /*let usuario = JSON.parse(localStorage.getItem('usuario') || "");

    if ( usuario.score>=30 ) {
      return true;
    }
    this.router.navigate(['/usuarios']); 
    */
    
    return false;
  }

}
