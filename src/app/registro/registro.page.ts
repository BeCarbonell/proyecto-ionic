import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../usuarios.service';
import { Router } from '@angular/router';
import{
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
  } from '@angular/forms';
  import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  formularioRegistro: FormGroup;


  constructor(public fb:FormBuilder,
              private usuariosService: UsuariosService,
              private router : Router,
              public alertController: AlertController) { 
        this.formularioRegistro = this.fb.group({
        'nombre': new FormControl("", Validators.required),
        'usuario': new FormControl("", Validators.required),
        'password': new FormControl("", Validators.required),
        'confirmacionPassword': new FormControl("", Validators.required)
      });
    }

  ngOnInit() {
  }
  async agregar(nombre :HTMLInputElement, apellido:HTMLInputElement, usuario:HTMLInputElement, contrasena:HTMLInputElement)
  {
//    var f = this.formularioRegistro.value;

//    if(this.formularioRegistro.invalid){
//      const alert = await this.alertController.create({
//        header: 'Datos incompletos',
//        message: 'llene todos los datos',
//        buttons: ['Aceptar']
//      });
//      await alert.present();
//      return;

    const nom = nombre.value;
    const usu = usuario.value;
    const cont = contrasena.value;
    this.usuariosService.addUsuario(nom, usu, cont);
    this.router.navigate(['/inicio'])
  }
}
