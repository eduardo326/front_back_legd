import { Component, OnInit } from '@angular/core';

import { UsuariosService } from '../../services/usuarios.service';
import { Usuario } from '../../models/usuario';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidacionesPersonalizadasService } from 'src/app/services/validaciones-personalizadas.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';


@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})

export class UsuariosComponent implements OnInit {

  criterioDeBusqueda:string="";
  usuarios: Usuario[] = [];
  forma: FormGroup;
  banderaGrafica:boolean=false;

  constructor(private usuariosService: UsuariosService,
              private fb: FormBuilder,
              private validadores: ValidacionesPersonalizadasService,
              private router: Router){

    this.crearFormulario();

  }

  ngOnInit() {}

  buscarUsuarios(){
    this.usuariosService.getUsuarios(this.forma.value.busqueda).subscribe(
      usuarios => {
        this.usuarios = usuarios as Usuario[];
        console.log(this.usuarios);
      },
      err => {
        Swal.fire(err.name, err.message, 'error');
      })
  }

  crearFormulario(){
    this.forma = this.fb.group({
      busqueda:['', [Validators.minLength(4), Validators.required, this.validadores.validarPablabra]]
    });
  }

  consultarPerfil(login:string, score:number){
    // localStorage.setItem('usuario', JSON.stringify({login, score}));
    this.router.navigate(['/usuarios/'+login]);
  }

  activarGrafica(){
    this.banderaGrafica = !this.banderaGrafica;
  }
  
}
