import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidacionesPersonalizadasService {

  constructor() { }

  validarPablabra(control: FormControl): any {

    return control.value.toLowerCase()==="doublevpartners" ? {validarPablabra:true} : null
    
  }
}
