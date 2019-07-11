import { Component, OnInit } from '@angular/core';
import { ClientTestimony } from './organisms/testimony/testimony.model';

const TESTIMONIES: ClientTestimony[] = [
  {
    company: {
      name: 'CitrusBR',
      logoSrc: 'assets/images/citrusbr.png'
    },
    client: {
      name: 'Ibiapaba Neto',
      title: 'Diretor executivo',
      photoSrc: 'assets/clients/Ibiapaba_Neto.jpg'
    },
    content: [
      'Meu nome é Ibiapaba Netto, sou diretor-executivo da Associação Nacional dos Exportadores de' +
      ' Sucos Cítricos (CitrusBR), entidade que representa os maiores exportadores de suco de laranja do mundo.',
      'A sobTIC trabalhou para a CitrusBR em projeto de Inteligencia de Negócio (BI), ficamos plenamente' +
      ' satisfeitos com o resultado obtido e a equipe deles sempre se mostrou apta para atender às nossas necessidades.'
    ]
  },
  {
    company: {
      name: 'Fortel',
      logoSrc: 'assets/images/fortel.jpg'
    },
    client: {
      name: 'Fabiola Caran',
      title: 'Diretora de vendas',
      photoSrc: 'assets/clients/Fabiola_Caran.jpg'
    },
    content: [
      'Com a implantação do Pipedrive o setor de vendas se tornou mais rápido, ágil e produtivo onde conseguimos' +
      ' atender mais clientes por dia, as informações estão mais disponíveis com total conhecimento de todo o' +
      ' histórico do cliente.',
      'O site da Fortel está totalmente inovado, fácil de navegar, com ferramenta de busca de toda nossa linha' +
      ' de produtos. Com essas 2 ferramentas a Fortel já está operando em um ritmo mais acelerado, porém sem' +
      ' sobrecarregar nossos funcionários.'
    ]
  },
  {
    company: {
      name: 'Eletrosom',
      logoSrc: 'assets/images/eletrosom.jpg'
    },
    client: {
      name: 'Wemerson Dias',
      title: 'Gerente de e-commerce',
      photoSrc: 'assets/clients/Wemerson_Dias.jpg'
    },
    content: [
      'Em uma gestão focada em resultados, nada melhor que uma parceria que atende desde a base do negocio ao detalhe' +
      ' que faz a diferença, com soluções que realmente agregam no resultado.'
    ]
  },
  {
    company: {
      name: 'Arithmos',
      logoSrc: 'assets/images/arithmos.jpg'
    },
    client: {
      name: 'Felipe Drummond',
      title: 'Diretor executivo',
      photoSrc: 'assets/clients/Felipe_Drummond.jpg'
    },
    content: [
      'Fizemos uma imersão com nosso time comercial, com o Luan Rodrigues da sobTIC, sobre o uso da ferramenta' +
      ' PIPEDRIVE, que foi simplesmente revolucionária. Chegamos a conclusão que não usávamos 5% dos recursos da' +
      ' plataforma. Mudamos o mindset da equipe e implementamos padrões e funcionalidades que otimizaram enormemente' +
      ' o trabalho do time comercial. Além de todo o conhecimento técnico do sistema que agregamos, foi passado a' +
      ' equipe todas as vantagens e importâncias de se trabalhar corretamente com índices e dados reais que um CRM' +
      ' bem alimentado nos permite ter. Foi um sucesso o treinamento.'
    ]
  }
];

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent {
  testimonies: ClientTestimony[] = TESTIMONIES;

  constructor() {}

}
