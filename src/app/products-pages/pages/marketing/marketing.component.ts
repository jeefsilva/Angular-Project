import { Component, OnInit } from '@angular/core';
import {ProductData} from "../../product-data.model";

@Component({
  selector: 'app-products-marketing',
  templateUrl: './marketing.component.html',
  styleUrls: ['./marketing.component.scss']
})
export class MarketingComponent implements OnInit {
  data: ProductData = {
    title: 'Gestão de Marketing',
    description: 'Conquiste a audiência dos seus clientes por meio de ' +
    'uma comunicação estruturada,metodologias consistentes e ferramentas ' +
    'adequadas. Conheça como podemos atingir a audiência do seu cliente com o Mailchimp.',
    mapping: 'Iniciamos uma jornada de entendimento dos produtos e serviços ' +
    'comercializados pela empresa e identificamos oportunidades e ' +
    'ameaças para obter o posicionamento estratégico da ' +
    'comunicação com o público alvo.',
    modeling: 'Estruturamos os produtos e serviços à indicadores, ' +
    'transpondo as oportunidades encontradas em resultados que viabilizem ' +
    'a otimização das vendas e diminuam barreiras existentes na conversão e ' +
    'mantenimento do relacionamento com os clientes.',
    integration: 'Em conformidade as definições estratégicas, ' +
    'implementamos os processos de Marketing, adequando a empresa às ferramentas.',
    improvement: 'Acompanhamos o desenvolvimento da estratégia analisando os ' +
    'indicadores por meio das ferramentas, apoiando a empresa na tomada de decisão.',
    promo: 'Potencialize a audiência da sua empresa.'
  };

  constructor() { }

  ngOnInit() {
  }
}
