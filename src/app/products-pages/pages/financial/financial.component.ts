import { Component, OnInit } from '@angular/core';
import {ProductData} from "../../product-data.model";

@Component({
  selector: 'app-products-financial',
  templateUrl: './financial.component.html',
  styleUrls: ['./financial.component.scss']
})
export class FinancialComponent implements OnInit {
  data: ProductData = {
    title: 'Gestão Financeira',
    description: 'Faça parte das empresas que obtêm sucesso na gestão ' +
    'financeira de seus negócios. Conheça como podemos atingir ' +
    'uma gestão financeira sustentável com o ContaAzul.',
    mapping: 'Iniciamos uma jornada de entendimento do processo administrativo, ' +
    'identificando oportunidades e ameças, para otimizar a utilização dos recursos da empresa.',
    modeling: 'Estruturamos a estratégia administrativa aos indicadores financeiros e ' +
    'contábeis, viabilizando o monitoramento e controle dos recursos empresariais, ' +
    'por meio do alinhamento das receitas e despesas com a contabilidade.',
    integration: 'Implementamos o processo administrativo, integrando o ' +
    'processo de vendas e operacional, adequando as ferramentas as rotinas das áreas da empresa.',
    improvement: 'Acompanhamos o desenvolvimento da estratégia analisando os ' +
    'indicadores por meio das ferramentas, apoiando a empresa na tomada de decisão.',
    promo: 'Tenha um fluxo de caixa inteligente, sem complicação.'
  };

  constructor() { }

  ngOnInit() {
  }

}
