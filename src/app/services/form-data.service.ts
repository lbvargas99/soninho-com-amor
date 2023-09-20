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

  private userLogged: Usuario = new Usuario('', '', '', '', );

  addUsuario(usuario: Usuario) {
    this.usuarios.push(usuario);
  }

  getUsuarios() {
    return this.usuarios;
  }

  getLoggerUser() {
    return this.userLogged;
  }

  setLoggedUser(usuario: Usuario) {
    this.userLogged = usuario;
  }

  updateUser(oldUserEmail: string, newUser: Usuario) {
    const index = this.usuarios.findIndex((user) => user.email === oldUserEmail);

    if (index !== -1) {
      this.usuarios[index] = newUser;
      this.userLogged = newUser
    }
  }
}
