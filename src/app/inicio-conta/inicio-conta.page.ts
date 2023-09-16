import { Component } from '@angular/core';

@Component({
  selector: 'app-inicio-conta',
  templateUrl: './inicio-conta.page.html',
  styleUrls: ['./inicio-conta.page.scss'],
})
export class InicioContaPage {

  dicas: string[] = [
    'Como fazer item',
    'Como fazer item',
    'Como fazer item'
  ];

  planosDeSono: string[] = [
    'Ajustes diários de rotina, horário e sono',
    'Estratégias de alimentação, desmame e desfralde',
    'Melhor qualidade de vida e tempo através do sono!'
  ];
  
}
