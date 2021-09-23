import { Component, OnInit } from '@angular/core';
import{
FormGroup,
FormControl,
Validators,
FormBuilder
} from '@angular/forms';
import { UsuariosService } from '../usuarios.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  usuarios = []

  formularioLogin: FormGroup;



  constructor(public fb:FormBuilder, private usuariosService: UsuariosService, private router: Router) 
    {
      this.formularioLogin = this.fb.group({

        'usuario': new FormControl("",Validators.required),
        'password': new FormControl("",Validators.required)

      })
    }

  ngOnInit() {
    this.usuarios = this.usuariosService.getUsuarios();
  }
  ionViewWillEnter()
  {
    this.usuarios = this.usuariosService.getUsuarios();
  }
  redireccion()
  {
    this.router.navigate(['/inicio']);
  }
}
