import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../usuarios.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  usuarios = []

  constructor(private usuariosService: UsuariosService, private router: Router) { }

  ngOnInit() {
    this.usuarios = this.usuariosService.getUsuarios();
  }
  ionViewWillEnter()
  {
    this.usuarios = this.usuariosService.getUsuarios();
  }
  redireccion()
  {
    this.router.navigate(['/']);
  }
}
