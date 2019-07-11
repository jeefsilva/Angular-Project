import { Component, OnInit } from '@angular/core';
import {ProductData} from "../../product-data.model";

@Component({
  selector: 'app-products-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.scss']
})
export class SalesComponent implements OnInit {
  data: ProductData = {
    title: 'Gestão de Vendas',
    description: '80% do sucesso dos negócios são vendas, atinja resultados incriveis. ' +
    'Conheça como podemos otimizar a performance da sua equipe de vendas com o Pipedrive.',
    mapping: 'Iniciamos uma jornada de entendimento do processo de vendas, ' +
    'identificando oportunidades e ameças, para otimizar a conversão.',
    modeling: 'Estruturamos a estratégia de venda à indicadores, transpondo as ' +
    'oportunidades encontradas em resultados que otimizem as vendas, por meio do aumento da taxa de conversão.',
    integration: 'Implementamos o processo de venda, adequando as ferramentas ao time de vendas.',
    improvement: 'Acompanhamos o desenvolvimento da estratégia analisando ' +
    'os indicadores por meio das ferramentas, apoiando a empresa na tomada de decisão.',
    promo: 'Aumente seus ganhos, atinja resultados incríveis.'
  };

  constructor() { }

  ngOnInit() {
  }

}
