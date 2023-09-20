import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormDataService } from '../services/form-data.service';
import { Usuario } from '../models/Usuario';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {

  cadastroForm = this.fb.group({
    nome: [''],
    sobrenome: [''],
    email: [''],
    senha: ['']
  });

  constructor(
    private fb: FormBuilder,
    private formDataService: FormDataService,
    private router: Router) {}

  ngOnInit() {
  }

  onSubmit() {
    const formData: Usuario = {
      nome: this.cadastroForm.value?.nome || '',
      sobrenome: this.cadastroForm.value.sobrenome || '',
      email: this.cadastroForm.value.email || '',
      senha: this.cadastroForm.value.senha || ''
    }
    this.formDataService.addUsuario(formData);
    this.router.navigate(['/login']);
  }
}
