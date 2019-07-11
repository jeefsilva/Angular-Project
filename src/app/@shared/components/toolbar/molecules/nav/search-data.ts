import SearchItem from '../search/search-item';

export const SEARCH_DATA: SearchItem[] = [
  {
    title: 'Construa Valor',
    keywords: ['gestão', 'negócio', 'processo', 'metodologia', 'parceiros', 'produtos'],
    target: '/',
    children: [
      {
        title: 'Compromisso',
        target: '/',
        scroll: 300,
        children: [
          {
            title: 'Serviço Excepcional',
            keywords: ['estratégia', 'possíbilidades', 'possibilidades']
          },
          {
            title: 'Preço Justo',
            keywords: ['valor', 'custo', 'serviço']
          },
          {
            title: 'Custo Sustentável',
            keywords: ['preço', 'objetivos']
          },
          {
            title: 'Tecnicamente Viável',
            keywords: ['equipe', 'multidisciplinar', 'entrega']
          }
        ]
      }
    ]
  },
  {
    title: 'Processo',
    keywords: ['ciclo', 'melhoria', 'metodologia'],
    target: '/processo',
    children: [
      {
        title: 'Mapeamento',
        keywords: ['entender', 'documentar', 'estudo de caso', 'processos', 'negócio'],
        scroll: 200
      },
      {
        title: 'Modelagem',
        keywords: ['plano de ação', 'entrega', 'viável'],
        scroll: 200
      },
      {
        title: 'Integração',
        keywords: ['competências', 'processos', 'pessoas', 'ferramentas'],
        scroll: 200
      },
      {
        title: 'Melhoria',
        keywords: ['contínuo', 'pdca', 'crescimento', 'indicadores', 'próximos passos', 'sustentabilidade', 'entrega'],
        scroll: 200
      },
      {
        title: 'Como funciona',
        scroll: 700
      }
    ]
  },
  {
    title: 'Parceiros',
    keywords: ['parceiras', 'ferramentas', 'comprometimento', 'lealdade', 'relacionamento', 'sucesso'],
    target: '/parceiros',
    children: [
      {
        title: 'Mailchimp',
        keywords: ['marketing', 'marca', 'e-mail', 'venda'],
        scroll: 300
      },
      {
        title: 'Pipedrive',
        keywords: ['crm', 'vendas', 'resultados'],
        scroll: 300
      },
      {
        title: 'ContaAzul',
        keywords: ['financeiro', 'controle', 'financeiro', 'back-office', 'office'],
        scroll: 300
      },
      {
        title: 'Pipefy',
        keywords: ['operação', 'operacional', 'equipes', 'kanban', 'scrum', 'processos'],
        scroll: 300
      },
    ]
  },
  {
    title: 'Produtos',
    keywords: ['360º'],
    target: '/solucoes',
    scroll: 300,
    children: [
      {
        title: 'Gestão de Marketing',
        keywords: ['mailchimp', 'audiência', 'audiencia']
      },
      {
        title: 'Gestão de Vendas',
        keywords: ['pipedrive', 'venda', 'resultado']
      },
      {
        title: 'Gestão Financeira',
        keywords: ['contaazul', 'recursos', 'financeiro', 'back-office', 'office']
      },
      {
        title: 'Gestão Operacional',
        keywords: ['pipefy', 'processos', 'performance']
      },
      {
        title: 'Vamos construir juntos',
        target: '/solucoes',
        scroll: 960,
        children: [
          {
            title: 'Produtos sustentáveis',
            keywords: ['empreendedores', 'conscientes']
          },
          {
            title: 'Comunicação integrada'
          },
          {
            title: 'Venda efetiva',
            keywords: ['detalhes']
          },
          {
            title: 'Financeiro equacionado',
            keywords: ['fluxo']
          },
          {
            title: 'Contabilidade legítima',
            keywords: ['regras', 'leis']
          },
          {
            title: 'Contratos bem feitos',
          },
          {
            title: 'Fornecedores comprometidos',
            keywords: ['vitória']
          },
          {
            title: 'Colaboradores qualificados',
          }
        ]
      }
    ]
  },
  {
    title: 'Clientes',
    keywords: ['potencial', 'casos', 'cases', 'sucesso', 'portfólio', 'portfolio'],
    target: '/clientes',
    children: [
      {
        title: 'CitrusBR',
        keywords: ['ibiapaba', 'neto', 'diretor', 'executivo'],
        scroll: 360
      },
      {
        title: 'Fortel',
        keywords: ['fabiola', 'caran', 'diretora', 'vendas'],
        scroll: 360
      },
      {
        title: 'Eletrosom',
        keywords: ['wemerson', 'dias', 'gerente', 'e-commerce'],
        scroll: 360
      },
      {
        title: 'Arithmos',
        keywords: ['felipe', 'drummond', 'diretor', 'executivo'],
        scroll: 970
      }
    ]
  }
];
