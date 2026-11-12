# MJ.data — Portfólio

Portfólio pessoal de **Maria Júlia Carvalho Sousa**, Analista de Dados | Analytics Engineer.
Site estático e bilíngue (PT/EN), feito em HTML, CSS e JavaScript puros (ES Modules), sem build e sem dependências. Pronto para o **GitHub Pages**.

## Rodando localmente

Os módulos JavaScript não funcionam abrindo o arquivo direto (`file://`). Use um servidor local:

```powershell
python -m http.server 8000
# acesse http://localhost:8000
```

Em `localhost`, o console do navegador avisa se os pacotes PT e EN tiverem chaves diferentes.

## Estrutura

```
portfolio/
├── index.html             # Home
├── projects.html          # Todos os projetos
├── education.html         # Formação, certificados e idiomas
├── 404.html               # Página de erro do GitHub Pages
├── assets/
│   ├── css/
│   │   ├── main.css       # Ponto de entrada (importa os demais)
│   │   ├── base/          # tokens (cores, fontes), reset, utilitários
│   │   ├── layout/        # header, footer, páginas secundárias
│   │   └── components/    # hero, tech, projects, timeline, education, modal...
│   ├── docs/              # Currículo em PDF
│   └── img/               # favicon e certs/ (imagens dos certificados)
└── src/
    ├── main.js            # Ponto de entrada: escolhe o idioma, renderiza e liga a UI
    ├── config.js          # Idiomas suportados e páginas
    ├── data/              # Dados que NÃO dependem de idioma (links, stack, imagens)
    ├── i18n/
    │   ├── index.js       # Detecção, carregamento e persistência do idioma
    │   └── locales/
    │       ├── pt/        # Todos os textos em português
    │       └── en/        # Todos os textos em inglês (mesmas chaves do pt)
    ├── components/        # Funções que geram o HTML de cada bloco
    ├── pages/             # Composição de cada página a partir dos componentes
    └── ui/                # Comportamento: menu, abas, modal, animações
```

### Como o conteúdo é organizado

| O quê | Onde |
|---|---|
| Textos em português | `src/i18n/locales/pt/*.js` |
| Textos em inglês | `src/i18n/locales/en/*.js` |
| Links, e-mail, currículo | `src/data/profile.js` |
| Projetos (stack, link do GitHub) | `src/data/projects.js` |
| Formação e certificados (ícone, imagem) | `src/data/education.js` |
| Números da home | `src/data/stats.js` |
| Cores e fontes | `assets/css/base/tokens.css` |

O idioma é escolhido nesta ordem: `?lang=en` na URL → escolha salva → idioma do navegador → português.
Para compartilhar a versão em inglês, use o link com `?lang=en`.

## Tarefas comuns

> 📘 Guia completo, seção por seção e com exemplos em PT e EN: **[docs/guia-de-edicao.md](docs/guia-de-edicao.md)**.

### Adicionar um projeto
1. Em `src/data/projects.js`, adicione `{ id: "meuProjeto", stack: [...], repo: "https://github.com/...", onHome: false }`.
   Deixe `repo: ""` para exibir "Repositório indisponível no momento".
2. Em `locales/pt/projects.js` **e** `locales/en/projects.js`, adicione `items.meuProjeto` com `tag`, `title` e `summary` (e, se quiser, `description` e `highlights`).

### Adicionar um certificado
1. Salve a imagem em `assets/img/certs/` (ex.: `power-bi.jpg`).
2. Em `src/data/education.js`, adicione em `certificates`:
   `{ id: "powerBi", icon: "award", certImage: "assets/img/certs/power-bi.jpg", onHome: true }`.
3. Em `locales/pt/education.js` **e** `locales/en/education.js`, adicione `items.powerBi` com `title`, `org` e `date`.

### Atualizar o currículo
O botão "Baixar currículo" baixa o PDF do idioma atual: `assets/docs/curriculo-maria-julia-pt.pdf` (PT) ou `assets/docs/resume-maria-julia-en.pdf` (EN). Os caminhos ficam em `PROFILE.resume` (`src/data/profile.js`).
Para atualizar, exporte o `.docx` para PDF e substitua o arquivo, mantendo o nome. Veja a seção 14 do guia.

### Adicionar um idioma
Copie `src/i18n/locales/en/` para uma nova pasta (ex.: `es/`), traduza os textos e registre o idioma em `LANGUAGES` (`src/config.js`).

## Deploy no GitHub Pages

1. Faça push desta pasta para um repositório no GitHub.
2. No repositório, abra **Settings → Pages → Build and deployment**, escolha **Source: Deploy from a branch** e selecione **Branch: `main` / `(root)`**.
3. Em 1 a 2 minutos o site estará em:
   - `https://mariajuliacs.github.io/` se o repositório se chamar `mariajuliacs.github.io`;
   - `https://mariajuliacs.github.io/<repositorio>/` para qualquer outro nome.

> Em `404.html`, ajuste o `<base href="...">` para o nome do repositório (`/<repositorio>/`), ou use `/` se for o repositório `mariajuliacs.github.io`.
