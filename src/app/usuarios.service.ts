import { Injectable } from '@angular/core';
import { Usuario } from './usuario.model'
@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private usuarios: Usuario[] = [

  ]
  constructor() { }

  getUsuarios()
  {
    return this.usuarios
  }

  deleteUsuario(id: number)
  {
    this.usuarios = this.usuarios.filter(x=> {return x.id != id})
  }

  addUsuario(nombre: string, apellido: string, nomUsuario: string, contrasena: string)
  {
    this.usuarios.push(
      {id      : this.usuarios.length + 1,
      nombre  : nombre,
      apellido : apellido,
      nomUsuario : nomUsuario,
      contrasena : contrasena   
      })
  }
}
