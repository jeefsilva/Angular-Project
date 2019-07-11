import { Component, OnInit } from '@angular/core';
import {ProductData} from "../../product-data.model";

@Component({
  selector: 'app-products-operational',
  templateUrl: './operational.component.html',
  styleUrls: ['./operational.component.scss']
})
export class OperationalComponent implements OnInit {
  data: ProductData = {
    title: 'Gestão Operacional',
    description: 'Tenha o controle da sua operação, conduza sua equipe ao sucesso. ' +
    'Conheça gestão de processos com a plataforma Pipefy.',
    mapping: 'Iniciamos uma jornada de entendimento dos processos da empresa, ' +
    'identificando oportunidades e ameças, para otimizar a operação integrada das áreas da empresa.',
    modeling: 'Estruturamos os processos operacionais definindo os indicadores, por meio da ' +
    'modelagem das fases de cada processo, bem como suas interações ' +
    'entre as áreas internas e externas da empresa.',
    integration: 'Implementamos os processos operacionais, integrando ' +
    'as ferramentas de acordo com as necessidades de cada processo.',
    improvement: 'Acompanhamos o desenvolvimento da estratégia analisando ' +
    'os indicadores por meio das ferramentas, apoiando a empresa na tomada de decisão.',
    promo: 'Conduza seu negócio de forma rápida, intuita e poderosa'
  };

  constructor() { }

  ngOnInit() {
  }

}
