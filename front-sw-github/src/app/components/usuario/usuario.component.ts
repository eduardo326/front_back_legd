import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Usuario } from 'src/app/models/usuario';
import { UsuariosService } from 'src/app/services/usuarios.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent  implements OnInit {

  usuario: Usuario = new Usuario();
  

  constructor(private usuariosService: UsuariosService,
              private activatedRoute: ActivatedRoute){}

  ngOnInit(): void {

    this.activatedRoute.paramMap.subscribe( params =>{
      let login =params.get('login') || "";
      
      this.usuariosService.getUsuario(login)
        .then( usuario => {
          this.usuario = usuario as Usuario;
        })
        .catch( err => {
          if (err.status==404) {
            Swal.fire("Sin resultados", "No se encontraron resultados para la consulta", 'warning');
          } else{
            Swal.fire(err.name, err.message, 'error');
          }
        });

    })

  }


}
