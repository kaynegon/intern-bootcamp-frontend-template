# Template do Front-End do Intern Bootcamp 🚀

Este repositório contém o **template inicial do front-end** do projeto para o Intern Bootcamp, criado com **[Vite](https://vitejs.dev/)**. A ideia é fornecer um ponto de partida, facilitando o desenvolvimento com ferramentas modernas e eficientes.

A linguagem principal utilizada no projeto será **TypeScript**.

## 🎯 Objetivo

Este template foi criado para o **front-end** do projeto, permitindo que os participantes aprendam como desenvolver interfaces de usuário modernas, utilizando ferramentas atuais.  
O foco é facilitar o desenvolvimento sem a necessidade de configurar o ambiente do zero, estimulando maior foco em aprendizado e funcionalidades.

## ⚡ Tecnologias Utilizadas

- **[Vite](https://vitejs.dev/)**: Ferramenta de build rápida e leve para projetos web.
- **[React](https://reactjs.org/)**: Biblioteca JavaScript para criar interfaces de usuário.
- **[TypeScript](https://www.typescriptlang.org/)**: Superconjunto de JavaScript que adiciona tipagem estática.

Além dessas tecnologias principais, o projeto incorpora:

- **[Plop.js](https://plopjs.com/):** Ferramenta de scaffolding usada para gerar automaticamente páginas, componentes e hooks com estrutura consistente e templates predefinidos.
- **[Styled-Components](https://styled-components.com/):** Biblioteca para estilização de componentes no React usando a abordagem CSS-in-JS. Permite escrever estilos diretamente nos componentes, com suporte a temas e escopo isolado.
- **[Commitizen](https://commitizen-tools.github.io/commitizen/):** Ferramenta para padronizar mensagens de commit com um fluxo interativo baseado no padrão **Conventional Commits**.
- **[ESLint](https://eslint.org/):** Ferramenta de linting que identifica e corrige problemas no código, garantindo padrões de qualidade no desenvolvimento.
- **[Prettier](https://prettier.io/):** Code formatter que garante consistência na formatação do código, reduzindo debates estilísticos na equipe.
- **[Husky](https://typicode.github.io/husky/):** Configuração personalizada de Git hooks. Garante que validações, lint e pré-checks sejam executados antes de commits ou pushes.
- **[Lint-Staged](https://github.com/okonet/lint-staged):** Executa validações e correções em arquivos que estão no stage do Git, acelerando o processo de lint em conjunto com o Husky.

Essas ferramentas foram selecionadas para acelerar o desenvolvimento, garantir consistência no código e facilitar a manutenção do projeto.

## 🛡️ Requisitos para o Ambiente de Desenvolvimento

Certifique-se de que o ambiente de desenvolvimento atenda aos seguintes requisitos:

- **Node.js**: Versão 16.x ou superior  
  [Download Node.js](https://nodejs.org/)
- **NPM**: Versão 7.x ou superior (instalado junto com o Node.js)
- **Editor de Código**: Recomendamos o uso do **[Visual Studio Code (VSCode)](https://code.visualstudio.com/)**  
  Instale as seguintes extensões para melhorar sua experiência:
  - **[ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)**: Linter para identificar e corrigir problemas no código.
  - **[Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)**: Para formatação automática do código.
  - **[TypeScript](https://marketplace.visualstudio.com/items?itemName=eg2.tslint)**: Suporte à sintaxe e funcionalidades TypeScript.
  - **[Markdown All in One](https://marketplace.visualstudio.com/items?itemName=yzhang.markdown-all-in-one)**: Recursos úteis para edição do README.md.

## 🛠️ Como Utilizar o Template?

Siga os passos abaixo para começar a trabalhar no **front-end** do projeto:

1. **Clone o Repositório**

```bash
git clone https://github.com/kaynegon/intern-bootcamp-frontend-template.git
```

1. **Navegue até o Diretório do Projeto**

```bash
  cd intern-bootcamp-frontend-template
```

1. **Instale as Dependências**

Utilize o gerenciador de pacotes de sua escolha, como npm ou yarn:

```bash
  npm install
```

1. **Execute o Projeto**
   Inicie o servidor de desenvolvimento local:

```bash
  npm run dev
```

## 📂 Estrutura do Projeto

Abaixo está a organização dos arquivos e diretórios no projeto front-end:

```bash
src/
├── assets/          # Imagens, fontes e outros recursos estáticos
├── components/      # Componentes reutilizáveis do front-end
├── pages/           # Páginas principais da aplicação
├── hooks/           # Hooks personalizados
├── App.tsx          # Componente raiz da aplicação
└── main.tsx         # Ponto de entrada do projeto
```

## 📝 Scripts Disponíveis

Na pasta do projeto, você pode executar os seguintes scripts:

- **`dev`**: Inicia o servidor de desenvolvimento.

  ```bash
  npm run dev
  ```

- **`build`**: Gera a build de produção utilizando o TypeScript (tsc -b) seguido do Vite para compilar os arquivos.

  ```bash
  npm run build
  ```

- **`preview`**: Inicia um servidor local para visualizar a build de produção gerada.

  ```bash
  npm run lint
  ```

- **`lint`**: Executa o ESLint no diretório do projeto para identificar erros ou problemas de estilo.

  ```bash
  npm run lint
  ```

- **`lint:fix`**: Executa o ESLint no diretório do projeto e tenta corrigir automaticamente os problemas encontrados.

  ```bash
  npm run lint:fix
  ```

- **`lint:staged`**: Executa o ESLint apenas nos arquivos modificados que estão no stage do Git.

  ```bash
  npm run lint:staged
  ```

- **`format`**: Executa o Prettier no diretório e formata automaticamente os arquivos com base nas regras configuradas.

  ```bash
  npm run format
  ```

- **`test`**: Executa os testes unitários configurados com o Jest.

  ```bash
  npm run test
  ```

- **`test:watch`**: Executa os testes unitários no modo de observação contínua.

  ```bash
  npm run test:watch
  ```

- **`test:coverage`**: Gera um relatório de cobertura dos testes.

  ```bash
  npm run test:coverage
  ```

- **`generate`**: Gera um relatório de cobertura dos testes.

  ```bash
  npm run generate
  ```

- **`commit`**: Inicia um fluxo interativo para criar commits formatados.

  ```bash
  npm run commit
  ```

### Configuração de **Format On Save**

Para configurar a formatação automático ao salvar os arquivos no Visual Studio Code, siga os passos abaixo:

1. Abra as Configurações do VSCode:

   - Use o atalho `Ctrl` + `,` no Windows/Linux ou `Cmd` + `,` no Mac.
   - Ou clique no ícone ⚙️ (Configurações) no canto inferior esquerdo e depois em **Settings**.

2. Edite o arquivo de configurações (`settings.json`) para incluir os itens abaixo:

   ```json
   {
     "editor.formatOnSave": true, // Ativa formatação ao salvar
     "editor.defaultFormatter": "esbenp.prettier-vscode", // Define o Prettier como formatador padrão
     "eslint.validate": [
       // Adiciona validação ao ESLint para diversos tipos de arquivos
       "javascript",
       "javascriptreact",
       "typescript",
       "typescriptreact",
       "json"
     ],
     "prettier.requireConfig": true // Garante que apenas arquivos com configurações do Prettier serão formatados
   }
   ```

## Gerar Arquivos com o Plop: `npm run generate`

O projeto utiliza o **[Plop](<[Plop](https://plopjs.com/)>)**, uma ferramenta para scaffolding, que permite criar componentes, páginas e outros arquivos automaticamente com base em templates previamente configurados.

### Como Usar?

Utilize o seguinte comando para iniciar o gerador interativo do Plop:

```bash
npm run generate
```

Ao rodar este comando, será exibido um menu interativo no terminal, onde você poderá selecionar o tipo de arquivo ou estrutura que deseja criar. O Plop automaticamente pedirá as informações necessárias para gerar os arquivos com base nos templates configurados.

### Opções Disponíveis

#### 🧩 Component - Criar um Componente React

Cria um novo componente React com styled-components e inclui os arquivos relacionados, como estilos e testes.

O gerador `🧩 Component` automaticamente:

- Cria o arquivo de componente React (**ComponentName**.tsx).
- Cria um arquivo de estilos com styled-components (**ComponentName**.styles.ts).
- Cria arquivos de teste unitário (**ComponentName**.test.tsx).
- Atualiza o arquivo de índice dos componentes `src/components/index.ts` para que o novo componente seja exportado.
- Formata os arquivos gerados com Prettier.

#### 📄 Page - Criar uma Página React

Cria uma nova página em React com suporte a styled-components e cópia de traduções configuradas (i18n).

O gerador `📄 Page` automaticamente:

- Adiciona o Sufixo Page ao nome da página
- Gera o arquivo da página principal (**PageName**Page.tsx).
- Gera o arquivo de estilos com styled-components (**PageName**Page.styles.ts).
- Adiciona o arquivo de teste unitário (**PageName**Page.test.tsx).
- Gera o arquivo de traduções ligado à página (**PageName**.translation.ts).
- Atualiza o índice `src/pages/index.ts` para incluir a nova página.
- Atualiza o arquivo de configuração i18n `src/pages/pages.i18n.ts` para associar as traduções da página.
- Formata os arquivos gerados com Prettier.

#### 🪝 Hook - Criar um Hook Personalizado

Cria um hook React personalizado, com uma estrutura adequada e testes unitários.

O gerador `🪝 Hook` automaticamente:

- Adiciona o prefixo `use` ao nome do hook.
- Gera o arquivo principal do hook (use**HookName**.ts).
- Gera o arquivo de testes (use**HookName**.test.ts).
- Atualiza o índice do módulo `src/hooks/index.ts`, exportando automaticamente o novo hook.
- Formata os arquivos gerados com Prettier.

### Detalhes do Funcionamento

#### Gerando Páginas

No terminal, execute o comando `npm run generate`

- Escolha a opção `📄 Page`
- Insira o nome da página (ex.: Home).
  O gerador automaticamente adiciona o sufixo `Page` ao nome fornecido e realiza as ações necessárias.
- Escolha se a página terá props (opcional).

Os arquivos gerados ficarão no diretório src/pages/[PageName]Page/, organizados assim:

```bash
src/pages/HomePage/
├── HomePage.tsx             # Página React
├── HomePage.styles.ts       # Estilos com styled-components
├── HomePage.test.tsx        # Testes unitários da página
├── HomePage.translations.ts # Arquivo de tradução (i18n)
├── index.ts                 # Exporta a página
```

#### Gerando Hooks

No terminal, execute o comando `npm run generate`

- Escolha a opção `🪝 Hook`
- Insira o nome da página (ex.: FetchData).
  O gerador automaticamente adiciona o prefixo `use` ao nome fornecido.
- Escolha se a página terá props (opcional).

Os arquivos gerados ficarão no diretório src/pages/**PageName**Page/, organizados assim:

```bash
src/hooks/useFetchData/
├── useFetchData.ts          # Hook principal
├── useFetchData.test.ts     # Testes unitários do hook
├── index.ts                 # Exporta o hook
```

#### Gerando Components

No terminal, execute o comando `npm run generate`

- Escolha a opção `🧩 Component`
- Insira o nome do componente (ex.: Header).
- Escolha se o componente terá props (opcional).

Os arquivos gerados ficarão no diretório src/components/**ComponentName**/, organizados assim:

```bash
src/components/Header/
├── Header.tsx          # Componente React
├── Header.styles.ts     # Estilos via styled-components
├── Header.test.tsx      # Testes unitários para o componente
├── index.ts             # Exporta o componente
```

### Customizando os Templates

Os templates usados para o scaffolding do Plop podem ser configurados ou ajustados no arquivo plopfile.js, localizado na raiz do projeto.

```javascript
plop.setGenerator('🧩 Component', {
  description: 'Cria um componente React com styled-components',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'Qual o nome do componente?',
      validate: (value) => validateNameExists(value, 'components', plop),
    },
    {
      type: 'confirm',
      name: 'hasProps',
      message: 'Esse componente terá props?',
      default: false,
    },
  ],
  actions: (data) => {
    const basePath = 'components';
    const componentName = plop.renderString('{{pascalCase name}}', data);

    const paths = getPaths(basePath, componentName);
    const templates = getTemplates(basePath, data.hasProps);
    const exportStatement = getExportStatement(componentName);

    return [
      {
        type: 'add',
        path: paths.base,
        templateFile: templates.base,
      },
      {
        type: 'add',
        path: paths.styles,
        templateFile: templates.styles,
      },
      {
        type: 'add',
        path: paths.test,
        templateFile: templates.test,
      },
      {
        type: 'add',
        path: paths.index,
        templateFile: templates.index,
      },
      {
        type: 'updateIndexFile',
        filePath: `src/${basePath}/index.ts`,
        exportStatement,
      },
      {
        type: 'prettier',
        path: `src/${basePath}/${componentName}/* src/${basePath}/index.ts`,
      },
    ];
  },
});
```

Os templates controlam o conteúdo gerado nos arquivos. Eles são configurados no diretório plop-templates/ e podem ser ajustados conforme necessário.

**Templates de Componente:** plop-templates/components.
**Templates de Página:** plop-templates/pages.
**Templates de Hook:** plop-templates/hooks.

⚠️ Certifique-se de manter os templates atualizados e de acordo com os padrões utilizados no projeto. Isso evitará inconsistências ao gerar componentes ou outros arquivos.

---

💡 Nota: Este projeto foi pensado como um template inicial. Sinta-se livre para adicionar, modificar ou remover ferramentas e configurações conforme as necessidades específicas do seu projeto. O objetivo é que esta base ofereça flexibilidade e acelere o desenvolvimento. Personalizações são sempre bem-vindas. 🚀
