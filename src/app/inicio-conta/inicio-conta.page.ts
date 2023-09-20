import { Component, OnInit } from '@angular/core';
import { Usuario } from '../models/Usuario';
import { FormDataService } from '../services/form-data.service';

@Component({
  selector: 'app-inicio-conta',
  templateUrl: './inicio-conta.page.html',
  styleUrls: ['./inicio-conta.page.scss'],
})
export class InicioContaPage implements OnInit {

  constructor(
    private formDataService: FormDataService) {}

  usuario!: Usuario;

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

  ngOnInit(): void {
    this.usuario = this.formDataService.getLoggerUser();
  }
  
}
