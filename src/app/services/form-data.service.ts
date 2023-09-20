import { Injectable } from '@angular/core';
import { Usuario } from '../models/Usuario';

@Injectable({
  providedIn: 'root'
})
export class FormDataService {

  private usuarios: Usuario[] = [
    {
      nome: 'Administrador',
      sobrenome: 'Admin',
      email: 'admin@admin.com',
      senha: 'admin123'
    }
  ];

  addUsuario(usuario: Usuario) {
    this.usuarios.push(usuario);
  }

  getUsuarios() {
    return this.usuarios;
  }
}
