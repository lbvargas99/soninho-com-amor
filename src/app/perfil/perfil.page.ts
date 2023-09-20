import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Usuario } from '../models/Usuario';
import { FormDataService } from '../services/form-data.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-perfil',
	templateUrl: './perfil.page.html',
	styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

	usuario!: Usuario;
	perfilForm!: FormGroup;

	

	constructor(
		private fb: FormBuilder,
		private formDataService: FormDataService,
		private router: Router) { }

	ngOnInit() {
		this.usuario = this.formDataService.getLoggerUser();

		this.perfilForm = this.fb.group({
			nome: [this.usuario.nome],
			sobrenome: [this.usuario.sobrenome],
			email: [this.usuario.email],
			senha: [this.usuario.senha]
		});
	}

	onSubmit() {
		const formData: Usuario = {
			nome: this.perfilForm.value?.nome || '',
			sobrenome: this.perfilForm.value.sobrenome || '',
			email: this.perfilForm.value.email || '',
			senha: this.perfilForm.value.senha || ''
		}

		this.formDataService.updateUser(this.usuario.email, formData)
		this.router.navigate(['/login']);
	}

}
