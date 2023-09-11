import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  title: string = 'Cuidando do sono Nutrindo sorrisos';
  loginConta: string = 'Entrar na conta';
  cadastrarConta: string = 'CADASTRE-SE';
  constructor() {}

}
