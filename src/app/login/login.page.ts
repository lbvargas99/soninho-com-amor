import { Component, OnInit } from '@angular/core';
import { FormDataService } from '../services/form-data.service';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  loginForm = this.fb.group({
    email: [''],
    senha: ['']
  });

  constructor(
    private fb: FormBuilder,
    private formDataService: FormDataService,
    private router: Router) { }

  onSubmit() {
    const email = this.loginForm.get('email')?.value;
    const senha = this.loginForm.get('senha')?.value;

    const usuario = this.formDataService
      .getUsuarios()
      .find((user) => user.email === email && user.senha === senha
      );

    if (usuario) {
      this.formDataService.setLoggedUser(usuario);
      
      this.router.navigate(['/inicio-conta'])
    } else {
      alert('E-mail ou senha inválida')
    }
  }

}
