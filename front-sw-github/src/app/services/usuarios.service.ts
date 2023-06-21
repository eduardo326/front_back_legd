import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Usuario } from '../models/usuario';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private urlEndPointPerfiles: string = 'https://api.github.com/search/users?q=';
  private urlEndPointUsuario: string = 'https://api.github.com/users/';

  constructor(private http: HttpClient) { }

  getUsuarios(criterio:string): Observable<Usuario[]> {

    return this.http.get<Usuario[]>(this.urlEndPointPerfiles + criterio).pipe(map((response: any) => response.items.slice(0, 9)));

  }

  getUsuario( criterio: string ) {

    return new Promise(( resolve, reject ) => {
      let usuario: Usuario= new Usuario();

      this.http.get<Usuario>(this.urlEndPointUsuario + criterio).subscribe((data) => {
        usuario=data;
        resolve( usuario )
      },
      err => {
        reject( err );
      });
    });

  }

}
