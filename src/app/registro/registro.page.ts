import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../usuarios.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  constructor(private usuariosService: UsuariosService,
              private router : Router
    ) { }

  ngOnInit() {
  }
  agregar(nombre :HTMLInputElement, apellido:HTMLInputElement, nomUsuario:HTMLInputElement, contrasena:HTMLInputElement)
  {
    const nom = nombre.value;
    const ape = apellido.value;
    const usu = nomUsuario.value;
    const cont = contrasena.value;
    this.usuariosService.addUsuario(nom, ape, usu, cont);
    this.router.navigate(['/'])
  }
}
