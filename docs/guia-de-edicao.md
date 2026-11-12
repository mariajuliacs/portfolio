# Guia de edição do portfólio

Este guia mostra **onde** e **como** alterar cada parte do site, em português e em inglês.
Use-o sempre que tiver uma informação nova: projeto, certificado, cargo, curso etc.

---

## Sumário

0. [Antes de começar](#0-antes-de-começar)
1. [Como o projeto está organizado](#1-como-o-projeto-está-organizado)
2. [Dados pessoais e contatos](#2-dados-pessoais-e-contatos)
3. [Título da aba e descrição para o Google](#3-título-da-aba-e-descrição-para-o-google)
4. [Menu, botões e mensagens](#4-menu-botões-e-mensagens)
5. [Home: apresentação (hero)](#5-home-apresentação-hero)
6. [Home: números (cards de estatística)](#6-home-números-cards-de-estatística)
7. [Títulos das seções da home](#7-títulos-das-seções-da-home)
8. [Tech stacks (competências)](#8-tech-stacks-competências)
9. [Projetos](#9-projetos)
10. [Experiências](#10-experiências)
11. [Formação, certificados e idiomas](#11-formação-certificados-e-idiomas)
12. [Sobre](#12-sobre)
13. [Contato](#13-contato)
14. [Currículo em PDF](#14-currículo-em-pdf)
15. [Rodapé](#15-rodapé)
16. [Cores e fontes](#16-cores-e-fontes)
17. [Conferir e publicar](#17-conferir-e-publicar)
18. [Erros comuns](#18-erros-comuns)

---

## 0. Antes de começar

### Abra o site localmente

No terminal, dentro da pasta do projeto:

```powershell
python -m http.server 8000
```

Acesse **http://localhost:8000**. Depois de salvar um arquivo, recarregue a página com **Ctrl + F5**.

> Abrir o `index.html` com dois cliques **não funciona**: a página fica em branco. Use sempre o servidor local.

### Regra de ouro: português e inglês andam juntos

Todo texto existe em **dois arquivos com o mesmo nome**:

```
src/i18n/locales/pt/projects.js   ← português
src/i18n/locales/en/projects.js   ← inglês
```

Sempre que adicionar, remover ou renomear algo em um, **faça o mesmo no outro**, na mesma posição e com os mesmos nomes de campo. Só o texto entre aspas muda.

Em `localhost`, se os dois ficarem diferentes, o console do navegador (**F12 → Console**) mostra um aviso como:

```
[i18n] "en" differs from "pt":
- projects.items.meuProjeto: missing
```

### Regras de escrita nos arquivos `.js`

Os arquivos de conteúdo são JavaScript. Siga estas regras para não quebrar o site:

| Regra | Certo | Errado |
|---|---|---|
| Textos entre aspas duplas | `title: "Data Analytics",` | `title: Data Analytics,` |
| Vírgula no fim de cada item | `"Python",` `"SQL",` | `"Python"` `"SQL"` |
| Aspas dentro do texto: use aspas curvas ou `\"` | `"o chamado “Painel”"` | `"o chamado "Painel""` |
| Apóstrofo pode ser usado normalmente | `"Let's"` | — |
| Não apague `{ }`, `[ ]` nem os nomes dos campos | `org: "Estácio",` | `"Estácio",` |

> Se a página ficar em branco depois de uma edição, quase sempre é uma vírgula ou aspa faltando. Veja [Erros comuns](#18-erros-comuns).

---

## 1. Como o projeto está organizado

```
src/
├── data/               ← informações que NÃO mudam com o idioma
│   ├── profile.js      (nome, e-mail, GitHub, LinkedIn, currículo)
│   ├── stats.js        (números da home)
│   ├── projects.js     (stack, link do GitHub, ordem dos projetos)
│   └── education.js    (formação, certificados, idiomas: ícones e imagens)
│
└── i18n/locales/
    ├── pt/             ← todos os TEXTOS em português
    │   ├── common.js       (menu, botões, mensagens, rodapé, título da aba)
    │   ├── home.js         (apresentação, números, títulos, sobre, contato)
    │   ├── tech.js         (tech stacks)
    │   ├── projects.js     (textos dos projetos)
    │   ├── experience.js   (experiências)
    │   └── education.js    (textos de formação, certificados e idiomas)
    └── en/             ← os MESMOS arquivos, em inglês
```

**Resumo:** link, imagem, tecnologia ou número vai em `src/data/`. Frase ou palavra que muda com o idioma vai em `src/i18n/locales/pt/` e `en/`.

Os itens são ligados por um **id**. O projeto `id: "pipelines"` em `data/projects.js` usa os textos de `items.pipelines` em `locales/pt/projects.js` e `locales/en/projects.js`.

---

## 2. Dados pessoais e contatos

📄 **Arquivo:** `src/data/profile.js` (vale para os dois idiomas)

```js
export const PROFILE = {
  name: "Maria Júlia Carvalho Sousa",   // nome completo (rodapé, título)
  firstName: "Maria",                   // 1ª linha do nome grande na home
  middleName: "Júlia",                  // 2ª linha (em roxo)
  email: "mariajuliacrss@gmail.com",
  github: {
    url: "https://github.com/mariajuliacs",   // endereço do link
    label: "github.com/mariajuliacs",         // texto exibido
  },
  linkedin: {
    url: "https://linkedin.com/in/mariajuliacs",
    label: "linkedin.com/in/mariajuliacs",
  },
  resume: {                             // currículo baixado em cada idioma (seção 14)
    pt: { file: "assets/docs/curriculo-maria-julia-pt.pdf", downloadName: "Maria_Julia_Carvalho_Sousa_Curriculo.pdf" },
    en: { file: "assets/docs/resume-maria-julia-en.pdf",    downloadName: "Maria_Julia_Carvalho_Sousa_Resume.pdf" },
  },
};
```

> Também atualize o e-mail e os links dentro do bloco `<noscript>` em `index.html`, `projects.html` e `education.html`. É o aviso para quem acessa sem JavaScript.

---

## 3. Título da aba e descrição para o Google

📄 **Arquivos:** `locales/pt/common.js` e `locales/en/common.js` → bloco `meta`

```js
meta: {
  home:      { title: "...", description: "..." },
  projects:  { title: "...", description: "..." },
  education: { title: "...", description: "..." },
},
```

- `title`: texto da aba do navegador e da prévia do link no LinkedIn e no WhatsApp.
- `description`: resumo que aparece no Google (até ~155 caracteres).

> Os arquivos `index.html`, `projects.html` e `education.html` têm uma cópia em português do `<title>` e da `description`. É o que o Google lê primeiro. Se mudar o texto em português, atualize lá também.

---

## 4. Menu, botões e mensagens

📄 **Arquivos:** `locales/pt/common.js` e `locales/en/common.js`

| Bloco | O que controla |
|---|---|
| `nav` | Itens do menu (Home, Tech, Projetos…) |
| `actions` | Botões: "Voltar", "Ver todos os projetos", "Ver tudo", "Ver", "Baixar currículo" |
| `status` | Mensagens: "Repositório indisponível no momento", "Certificado indisponível no momento.", "Nenhum certificado adicionado no momento." |
| `a11y` | Textos lidos por leitores de tela (não aparecem na tela) |
| `footer` | Cargo e cidade no rodapé |

Exemplo, para mudar o texto do botão de projetos:

```js
// pt/common.js
seeAllProjects: "Ver todos os projetos",
// en/common.js
seeAllProjects: "See all projects",
```

---

## 5. Home: apresentação (hero)

📄 **Arquivos:** `locales/pt/home.js` e `locales/en/home.js` → bloco `hero`

```js
hero: {
  eyebrow: "// analista de dados · analytics engineer",   // linha pequena acima do nome
  lead: "Desenvolvo pipelines ETL/ELT ...",              // frase de apresentação
  ctaContact: "Contato",                                  // botão roxo
  ctaProjects: "Projetos",                                // botão com borda
},
```

O nome grande ("MARIA JÚLIA") vem de `firstName` e `middleName` em `src/data/profile.js`.

---

## 6. Home: números (cards de estatística)

São **dois arquivos**: o número fica nos dados e o texto fica nos idiomas.

📄 **Número e ícone:** `src/data/stats.js`

```js
export const STATS = [
  { id: "pipelines",  icon: "database", value: "8" },
  { id: "dashboards", icon: "chart",    value: "5" },
  { id: "automation", icon: "bolt",     value: "-90%" },
  { id: "experience", icon: "clock",    value: "2+" },
];
```

📄 **Textos:** `locales/pt/home.js` e `locales/en/home.js` → bloco `stats`

```js
// pt
stats: {
  pipelines: { label: "Pipelines", sub: "ETL/ELT em produção, carga diária D-1" },
  ...
},
// en
stats: {
  pipelines: { label: "Pipelines", sub: "ETL/ELT in production, daily D-1 loads" },
  ...
},
```

- **Mudar um número** (ex.: 8 → 10 pipelines): altere só `value` em `stats.js`.
- **Trocar um card por outro:** mude o `id` em `stats.js` e crie o texto com o mesmo `id` em `pt/home.js` e `en/home.js`.
- Ícones disponíveis: veja a [lista de ícones](#lista-de-ícones).

---

## 7. Títulos das seções da home

📄 **Arquivos:** `locales/pt/home.js` e `locales/en/home.js` → bloco `sections`

```js
sections: {
  tech: { eyebrow: "// 02 — tech stacks", title: "Competências", highlight: "Técnicas" },
  ...
},
```

- `eyebrow`: linha pequena acima do título.
- `title`: parte branca do título.
- `highlight`: parte em roxo, que vem logo depois.

---

## 8. Tech stacks (competências)

📄 **Arquivos:** `locales/pt/tech.js` e `locales/en/tech.js`

Cada categoria é uma aba:

```js
{
  id: "bi",                         // identificador (igual nos dois idiomas)
  label: "BI & Análise",            // texto da aba na lateral
  title: "BI & Análise",            // título grande do painel
  items: ["Power BI", "DAX", "Power Query", "Excel"],
},
```

**Adicionar uma tecnologia:** inclua o nome em `items` **nos dois arquivos**:

```js
items: ["Power BI", "DAX", "Power Query", "Excel", "Looker Studio"],
```

**Mover uma tecnologia de "Em desenvolvimento" para outra aba** (ex.: você aprendeu Spark): tire de `items` da categoria `learning` e coloque na categoria certa, nos dois arquivos.

**Adicionar uma categoria nova:** copie um bloco `{ ... },` inteiro, dê um `id` novo e traduza `label`, `title` e os itens em `en/tech.js`. A numeração (01, 02…) é automática.

---

## 9. Projetos

Os projetos usam **três arquivos**:

| Arquivo | O que guarda |
|---|---|
| `src/data/projects.js` | id, tecnologias, link do GitHub, tamanho, se aparece na home |
| `locales/pt/projects.js` | textos em português |
| `locales/en/projects.js` | textos em inglês |

### 9.1 Dados do projeto (`src/data/projects.js`)

```js
{
  id: "pipelines",                                   // liga aos textos
  stack: ["Python", "SQL", "PostgreSQL"],            // chips de tecnologia
  pageStack: ["Python", "SQL", "PostgreSQL", "Airflow"], // (opcional) chips só na página de projetos
  repo: "https://github.com/mariajuliacs/meu-repo",  // link do GitHub ("" = indisponível)
  wide: true,                                        // (opcional) card ocupa 2 colunas
  onHome: true,                                      // (opcional) aparece também na home
},
```

- A **ordem** na lista é a ordem no site.
- `repo: ""` mostra "Repositório indisponível no momento". Com um link, aparece **GitHub ↗**.
- Para a grade ficar bonita, cada linha soma 3 colunas: um card `wide` (2) + um normal (1), ou três normais.

### 9.2 Textos do projeto (`locales/pt/projects.js` e `locales/en/projects.js`)

```js
items: {
  pipelines: {
    tag: "engenharia de dados",            // etiqueta rosa no topo do card
    title: "Pipelines ETL/ELT — 3 ERPs",   // título
    summary: "Texto curto ...",            // usado na HOME
    description: "Texto completo ...",     // (opcional) usado na página de projetos
    highlights: [                          // (opcional) tópicos na página de projetos
      "Primeiro destaque.",
      "Segundo destaque.",
    ],
  },
},
```

Se não houver `description`, a página de projetos usa o `summary`.

### 9.3 Passo a passo: adicionar um projeto novo

1. **`src/data/projects.js`**: adicione na posição desejada:
   ```js
   {
     id: "churnAnalysis",
     stack: ["Python", "Pandas", "Power BI"],
     repo: "https://github.com/mariajuliacs/churn-analysis",
     onHome: false,
   },
   ```
2. **`locales/pt/projects.js`**: dentro de `items`, adicione:
   ```js
   churnAnalysis: {
     tag: "análise de dados",
     title: "Análise de Churn",
     summary: "Análise exploratória de churn de clientes com Python e dashboard em Power BI.",
   },
   ```
3. **`locales/en/projects.js`**: dentro de `items`, adicione:
   ```js
   churnAnalysis: {
     tag: "data analysis",
     title: "Churn Analysis",
     summary: "Exploratory customer churn analysis with Python and a Power BI dashboard.",
   },
   ```

> O `id` precisa ser **exatamente igual** nos três arquivos (letras maiúsculas e minúsculas contam). Use letras sem acento e sem espaço, por exemplo `churnAnalysis`.

### 9.4 Projeto em destaque (card roxo)

- **Qual projeto:** `FEATURED_PROJECT_ID` no final de `src/data/projects.js`. O card roxo aparece logo depois desse projeto.
- **Textos e métricas:** bloco `featured` em `locales/pt/projects.js` e `locales/en/projects.js`:
  ```js
  featured: {
    tag: "projeto em destaque",
    title: "Painel de Incentivos e Comissões",
    metrics: [
      { value: "1 dia", label: "para lançar um incentivo (antes ~1 mês)" },
      { value: "200+", label: "pessoas impactadas" },
      { value: "~15k", label: "linhas de código", pageOnly: true },  // só na página de projetos
    ],
  },
  ```

### 9.5 Cabeçalho da página "Todos os projetos"

Bloco `page` em `locales/pt/projects.js` e `locales/en/projects.js` (`eyebrow`, `title`, `highlight`, `lead`).

---

## 10. Experiências

📄 **Arquivos:** `locales/pt/experience.js` e `locales/en/experience.js`

Cada experiência é um bloco em `items`, **da mais recente para a mais antiga**:

```js
{
  role: "Analista de Dados Jr.",                       // cargo
  company: "Grupo Vilarouca · Fortaleza, CE",          // empresa e cidade
  period: "Fev 2025 — Presente",                       // período
  badge: "Atual",                                      // etiqueta ao lado da data
  current: true,                                       // true = etiqueta verde
  description: "Rede varejista multimarca ...",        // (opcional) contexto da empresa
  bullets: [
    "Primeira atividade ou resultado.",
    "Segunda atividade ou resultado.",
  ],
},
```

### Passo a passo: novo emprego ou promoção

1. Na experiência atual, troque `current: true` por `current: false`, ajuste `period` (ex.: `"Fev 2025 — Mar 2027"`) e mude `badge` (ex.: `"CLT"`, `"Anterior"`).
2. Adicione o bloco novo **no início** de `items`, com `current: true` e `badge: "Atual"`.
3. Repita em `en/experience.js` (`"Present"`, `"Current"`; meses em inglês: Jan, Feb, Mar, Apr, May, Jun, Jul, Aug, Sep, Oct, Nov, Dec).

> Atualize também o card "Experiência" (`2+`) em `src/data/stats.js` e o primeiro parágrafo de [Sobre](#12-sobre), se o tempo de experiência mudar.

---

## 11. Formação, certificados e idiomas

Também usa **três arquivos**:

| Arquivo | O que guarda |
|---|---|
| `src/data/education.js` | id, ícone, imagem do certificado, status, se aparece na home |
| `locales/pt/education.js` | textos em português |
| `locales/en/education.js` | textos em inglês |

### 11.1 Grupos

Em `src/data/education.js` há quatro listas, que viram as seções da página **Formação**:

| Lista | Seção |
|---|---|
| `academic` | Formação acadêmica |
| `certificates` | Certificados |
| `languages` | Idiomas |
| `learning` | Em desenvolvimento |

Os nomes das seções ficam no bloco `groups` de `locales/pt/education.js` e `locales/en/education.js`.

### 11.2 Campos

**Dados (`src/data/education.js`):**

```js
{
  id: "ads",                                  // liga aos textos
  icon: "graduation",                         // ícone do card
  certImage: "assets/img/certs/ads.jpg",      // imagem aberta pelo botão "Ver" ("" = indisponível)
  status: "in-progress",                      // (opcional) "in-progress" = etiqueta verde
  main: true,                                 // (opcional) card grande na home
  onHome: true,                               // (opcional) aparece também na home
},
```

**Textos (`locales/pt/education.js` e `locales/en/education.js`), dentro de `items`:**

```js
ads: {
  title: "Análise e Desenvolvimento de Sistemas",
  org: "Universidade Estácio",
  date: "Ago 2023 — Jul 2026",
  badge: "Graduação",          // (opcional) etiqueta no rodapé do card
},
```

### 11.3 Passo a passo: adicionar um certificado

1. **Imagem:** salve em `assets/img/certs/` com nome simples, sem espaço nem acento (ex.: `power-bi-pl300.jpg`). Formatos: `.jpg`, `.png` ou `.webp`, com até ~500 KB.
2. **`src/data/education.js`**: dentro de `certificates: [ ]`, adicione:
   ```js
   certificates: [
     { id: "powerBi", icon: "award", certImage: "assets/img/certs/power-bi-pl300.jpg", onHome: true },
   ],
   ```
3. **`locales/pt/education.js`**: dentro de `items`, adicione:
   ```js
   powerBi: {
     title: "Power BI Data Analyst (PL-300)",
     org: "Microsoft",
     date: "Mar 2027",
   },
   ```
4. **`locales/en/education.js`**: dentro de `items`, adicione:
   ```js
   powerBi: {
     title: "Power BI Data Analyst (PL-300)",
     org: "Microsoft",
     date: "Mar 2027",
   },
   ```

Com `onHome: true`, o certificado aparece também na seção Formação da home. Na página Formação, todos aparecem e a mensagem "Nenhum certificado adicionado no momento." some sozinha.

> Se a imagem estiver em PDF, converta a primeira página para JPG ou PNG. O visualizador mostra imagens.

### 11.4 Adicionar a imagem a um item que já existe

Por exemplo, o diploma de ADS: salve a imagem em `assets/img/certs/` e preencha o `certImage` do item em `src/data/education.js`:

```js
{ id: "ads", icon: "graduation", certImage: "assets/img/certs/diploma-ads.jpg", status: "completed", main: true, onHome: true },
```

### 11.5 Concluiu um curso em andamento

- Em `src/data/education.js`: troque `status: "in-progress"` por `status: "completed"`.
- Nos dois arquivos de idioma: ajuste `date` e `badge` (ex.: `"Concluído"` / `"Completed"`).

### 11.6 Cabeçalho da página Formação

Bloco `page` em `locales/pt/education.js` e `locales/en/education.js`.

---

## 12. Sobre

📄 **Arquivos:** `locales/pt/home.js` e `locales/en/home.js` → bloco `about`

```js
about: {
  paragraphs: [                  // parágrafos de texto (pode adicionar ou remover)
    "Primeiro parágrafo.",
    "Segundo parágrafo.",
  ],
  facts: [                       // etiquetas pequenas abaixo do texto
    { icon: "pin", text: "Fortaleza, CE" },
    { icon: "monitor", text: "Disponível para remoto" },
    { icon: "globe", text: "Inglês B1" },
  ],
  areas: [                       // cards da direita
    { title: "Data Engineering", text: "Pipelines ETL/ELT e integração de dados" },
    ...
  ],
},
```

> Mantenha a mesma quantidade de itens em `paragraphs`, `facts` e `areas` nos dois idiomas.

---

## 13. Contato

📄 **Arquivos:** `locales/pt/home.js` e `locales/en/home.js` → bloco `contact`

```js
contact: {
  lead: "Aberta a oportunidades em ...",        // frase abaixo do título
  status: "Disponível agora",                   // etiqueta verde
  labels: { email: "E-mail", github: "GitHub", linkedin: "LinkedIn", location: "Localização" },
  location: "Fortaleza, CE — Remoto disponível",
},
```

O e-mail e os links vêm de `src/data/profile.js` (veja a [seção 2](#2-dados-pessoais-e-contatos)).

---

## 14. Currículo em PDF

O botão **Baixar currículo** baixa o arquivo do **idioma em que o site está**:

| Site em | Arquivo baixado | Nome salvo no computador do visitante |
|---|---|---|
| Português | `assets/docs/curriculo-maria-julia-pt.pdf` | `Maria_Julia_Carvalho_Sousa_Curriculo.pdf` |
| Inglês | `assets/docs/resume-maria-julia-en.pdf` | `Maria_Julia_Carvalho_Sousa_Resume.pdf` |

Esses caminhos ficam em `src/data/profile.js` → `resume`. Um idioma sem currículo próprio usa o PDF em português.

### Os arquivos de origem

Os dois currículos ficam em `Meu Drive/Profissional/Currículo/`:

| Idioma | Documento Word | Gerador |
|---|---|---|
| Português | `Maria_Julia_Curriculo.docx` | editado direto no Word |
| Inglês | `Maria_Julia_Resume_EN.docx` | `gerar_docx_en.py` |

### Atualizar o currículo em português

1. Edite `Maria_Julia_Curriculo.docx` no Word.
2. Use **Arquivo → Salvar como → PDF**.
3. Substitua `assets/docs/curriculo-maria-julia-pt.pdf` no portfólio, mantendo o nome.

### Atualizar o currículo em inglês

O currículo em inglês é gerado pelo script `gerar_docx_en.py`, que mantém o layout compatível com ATS (os sistemas de triagem de currículos).

1. Abra `gerar_docx_en.py` e altere os textos. Cada seção está marcada com um comentário (`# EXPERIENCE`, `# PROJECTS` etc.).
2. No terminal, dentro da pasta `Currículo`:
   ```powershell
   python gerar_docx_en.py
   ```
   Isso gera `Maria_Julia_Resume_EN.docx`. Se preferir, também dá para editar esse `.docx` direto no Word, mas a edição se perde se você rodar o script de novo.
3. No Word, use **Arquivo → Salvar como → PDF**.
4. Substitua `assets/docs/resume-maria-julia-en.pdf` no portfólio, mantendo o nome.

> Sempre que mudar algo no currículo em português (novo cargo, projeto, curso), faça a mesma mudança no inglês. Também atualize o site (seções [9](#9-projetos), [10](#10-experiências) e [11](#11-formação-certificados-e-idiomas)), para que site e currículos digam a mesma coisa.

> Lembre que os PDFs ficam públicos no site, incluindo o telefone.

---

## 15. Rodapé

- **Nome:** `name` em `src/data/profile.js`.
- **Cargo e cidade:** `footer.role` em `locales/pt/common.js` e `locales/en/common.js`.
- **Ícones de GitHub, LinkedIn e e-mail:** usam os links de `src/data/profile.js`.

---

## 16. Cores e fontes

📄 **Arquivo:** `assets/css/base/tokens.css`

```css
--accent: #a366ff;      /* roxo principal */
--accent-2: #c084ff;    /* roxo claro (títulos destacados, links) */
--bg: #0a0613;          /* fundo */
--text: #ece6ff;        /* texto principal */
--muted: #a59cc4;       /* texto secundário */
--grad: linear-gradient(...);  /* degradê dos botões e destaques */
```

Mudar um valor aqui muda o site inteiro. Cada parte visual tem seu arquivo em `assets/css/components/` (ex.: `projects.css`, `timeline.css`).

---

## 17. Conferir e publicar

### Checklist depois de editar

- [ ] Alterei o texto em **pt** e em **en**?
- [ ] O `id` é igual em `data/` e nos dois arquivos de idioma?
- [ ] Abri **http://localhost:8000** e o site carregou?
- [ ] Troquei para **EN** no topo e conferi a versão em inglês?
- [ ] O console (**F12 → Console**) está sem erros e sem avisos `[i18n]`?
- [ ] Conferi no celular, ou com **F12 → ícone de celular**?

### Publicar no GitHub Pages

No terminal, dentro da pasta do projeto:

```powershell
git add .
git commit -m "feat: adiciona certificado Power BI"
git push
```

Em 1 a 2 minutos o site publicado é atualizado. Se continuar mostrando a versão antiga, recarregue com **Ctrl + F5**.

Sugestões de mensagem de commit:

| Mudança | Mensagem |
|---|---|
| Novo conteúdo | `feat: adiciona projeto de análise de churn` |
| Correção de texto | `fix: corrige data da formação` |
| Atualização de conteúdo | `content: atualiza experiência atual` |
| Visual | `style: ajusta cor dos botões` |

---

## 18. Erros comuns

| Sintoma | Causa provável | Como resolver |
|---|---|---|
| Página toda em branco | Vírgula, aspa ou chave `}` faltando em um `.js` | **F12 → Console** mostra o arquivo e a linha do erro (`SyntaxError`) |
| Página em branco abrindo o arquivo com dois cliques | O site precisa de servidor | Use `python -m http.server 8000` |
| Um card mostra `undefined` ou dá erro | `id` diferente entre `data/` e o arquivo de idioma | Confira se o `id` é idêntico, inclusive maiúsculas |
| Funciona em PT mas quebra em EN | Item adicionado só no arquivo `pt` | Adicione também em `en`; o console mostra o aviso `[i18n]` |
| Botão "Ver" mostra "Certificado indisponível" | `certImage` vazio ou caminho errado | Confira o nome do arquivo em `assets/img/certs/`, com a extensão |
| Alteração não aparece | Cache do navegador | **Ctrl + F5** |
| Texto com aspas quebra o arquivo | Aspas duplas dentro do texto | Use aspas curvas `“ ”` ou `\"` |

---

## Lista de ícones

Nomes aceitos no campo `icon` (definidos em `src/components/icons.js`):

| Nome | Uso sugerido |
|---|---|
| `database` | dados, bancos, pipelines |
| `chart` | dashboards, análise, BI |
| `bolt` | automação, performance |
| `clock` | tempo, experiência |
| `graduation` | graduação, cursos |
| `award` | certificados |
| `book` | estudos |
| `globe` | idiomas |
| `pin` | localização |
| `monitor` | trabalho remoto |
| `mail` | e-mail |
| `github` | GitHub |
| `linkedin` | LinkedIn |

Para um ícone novo, adicione o desenho SVG em `src/components/icons.js`. Ícones gratuitos no mesmo estilo: [lucide.dev](https://lucide.dev); use só o conteúdo de dentro da tag `<svg>`.
