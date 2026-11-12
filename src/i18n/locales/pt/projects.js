/**
 * Textos dos projetos (pt-BR).
 * As chaves de `items` correspondem aos ids em src/data/projects.js.
 * - summary:     texto curto (home)
 * - description: texto da página de projetos (usa summary se ausente)
 * - highlights:  lista opcional exibida na página de projetos
 */
export default {
  page: {
    eyebrow: "// portfólio · projetos",
    title: "Todos os",
    highlight: "Projetos",
    lead:
      "Projetos desenvolvidos no setor de Dados & Automação do Grupo Vilarouca — de pipelines de dados a aplicações web em produção.",
  },

  featured: {
    tag: "projeto em destaque",
    title: "Painel de Incentivos e Comissões",
    metrics: [
      { value: "1 dia", label: "para lançar um incentivo (antes ~1 mês)" },
      { value: "200+", label: "pessoas impactadas" },
      { value: "~15k", label: "linhas de código", pageOnly: true },
    ],
  },

  items: {
    incentives: {
      tag: "aplicação web · 2026",
      title: "Painel de Incentivos e Comissões",
      summary:
        "Sistema web interno para criação, aprovação e acompanhamento de incentivos e comissões, desenvolvido do levantamento de requisitos ao deploy. Substituiu o processo baseado em planilhas, com controle de acesso por perfis, fluxo de aprovação em três etapas e motor de cálculo configurável pelo usuário final.",
      description:
        "Sistema web interno para criação, aprovação e acompanhamento de incentivos e comissões, desenvolvido integralmente por mim, do levantamento de requisitos ao deploy.",
      highlights: [
        "Backend em FastAPI (Python) com PostgreSQL, containerizado em Docker; aproximadamente 15 mil linhas de código.",
        "Arquitetura com duas bases: banco próprio da aplicação e conexão somente leitura à base comercial, preservando a integridade da fonte de dados.",
        "Controle de acesso com três perfis de permissão, autenticação com hash bcrypt e trilha de auditoria.",
        "Fluxo de aprovação em três etapas (rascunho, pendente, aprovado) com notificações automáticas por e-mail e exportação de dados em Excel.",
        "Motor de cálculo configurável pelo usuário final, permitindo montar regras de incentivo e comissão sem alteração de código.",
      ],
    },
    pipelines: {
      tag: "engenharia de dados",
      title: "Pipelines ETL/ELT — 3 ERPs",
      summary:
        "8 pipelines em Python e SQL integrando três ERPs, APIs, web scraping e planilhas em PostgreSQL, com carga diária D-1 e histórico desde 2024.",
      description:
        "8 pipelines em Python e SQL integrando três sistemas ERP, APIs, web scraping e planilhas em PostgreSQL, com carga diária D-1 de dados históricos desde 2024, atendendo mais de 200 usuários de negócio.",
    },
    reportAutomation: {
      tag: "automação",
      title: "Extração de Relatório Operacional",
      summary:
        "Automação com Python e Playwright que reduziu o processamento de 20 para 2 minutos (-90%), agendada no Apache Airflow.",
      description:
        "Automação com Python e Playwright que reduziu o tempo de processamento de 20 para 2 minutos (-90%). Agendada no Apache Airflow, cuja adoção no setor foi sugerida por mim.",
    },
    dashboards: {
      tag: "analytics",
      title: "Dashboards Power BI",
      summary:
        "5 dashboards para Logística, Comercial, DP e Diretoria. A análise de descontos embasou medidas que reduziram o indicador em mais de 20%.",
      description:
        "5 dashboards para Logística, Comercial, Departamento Pessoal e Diretoria. A análise de descontos comerciais embasou medidas que reduziram o indicador em mais de 20%.",
    },
    deliveryMonitoring: {
      tag: "automação · logística",
      title: "Monitoramento do Fluxo de Entrega",
      summary:
        "Automações de relatórios de pedidos e painel de monitoramento do fluxo de entrega para Suprimentos e Logística, acompanhando o cronograma de atendimento da indústria e apoiando o controle de ruptura. Substituiu a maior parte dos controles manuais em planilha.",
    },
    postgres: {
      tag: "bancos de dados",
      title: "Ambiente PostgreSQL",
      summary:
        "Sustentação, junto ao time, de um ambiente com cerca de 50 tabelas, com modelagem relacional, padronização e tratamento de dados.",
    },
  },
};
