const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

module.exports = function (plop) {
  plop.setWelcomeMessage(`
  🚀 Boas vindas ao Gerador de Templates!
  ---------------------------------------
  Escolha uma das opções abaixo:
  `);

  function runPrettier(renderedPath) {
    console.log('📦 Formatando arquivos com Prettier...');
    execSync(`npx prettier --write ${renderedPath}`, { stdio: 'inherit' });
    console.log('✨ Arquivos formatados com sucesso.');

    return;
  }

  function validateNameExists(
    value,
    basePath,
    plop,
    { prefix = '', suffix = '' } = {}
  ) {
    const nameToValidate = `${prefix}${plop.renderString('{{pascalCase name}}', { name: value })}${suffix}`;
    const folderPath = path.join(`src`, basePath, nameToValidate);

    if (fs.existsSync(folderPath)) {
      return `⚠️ O nome "${nameToValidate}" já existe em: ${folderPath}`;
    }

    return true;
  }

  function getTemplates(basePath, hasProps) {
    const templates = {
      base: hasProps
        ? `plop-templates/${basePath}/with-props.hbs`
        : `plop-templates/${basePath}/no-props.hbs`,
      test: hasProps
        ? `plop-templates/${basePath}/with-props.test.hbs`
        : `plop-templates/${basePath}/no-props.test.hbs`,
      styles: 'plop-templates/styles/styles.hbs',
      index: `plop-templates/${basePath}/index.hbs`,
      translations: `plop-templates/${basePath}/translations.hbs`,
    };

    return templates;
  }

  function getPaths(basePath, name) {
    const paths = {
      base: `src/${basePath}/${name}/${name}.tsx`,
      styles: `src/${basePath}/${name}/styles.ts`,
      test: `src/${basePath}/${name}/${name}.test.tsx`,
      translations: `src/${basePath}/${name}/{{camelCase name}}Page.i18n.ts`,
      index: `src/${basePath}/${name}/index.ts`,
    };

    return paths;
  }

  function getExportStatement(name) {
    return `export * from './${name}';`;
  }

  plop.setActionType('prettier', (answers, config, plop) => {
    try {
      const renderedPath = plop.renderString(config.path, answers);
      runPrettier(renderedPath);
    } catch (error) {
      console.error('❌ Erro ao rodar Prettier:', error.message);
    }
  });

  plop.setActionType('updateI18nConfig', (answers, config, plop) => {
    const i18nFilePath = path.resolve(config.filePath);
    const importStatement = plop.renderString(config.importStatement, answers);
    const namespaceEntry = plop.renderString(config.namespaceEntry, answers);

    try {
      let fileContent = fs.readFileSync(i18nFilePath, 'utf8');

      if (!fileContent.includes(importStatement)) {
        fileContent = fileContent.replace(
          '// TRANSLATION_IMPORT_PLACEHOLDER_DO_NOT_REMOVE',
          `${importStatement}\n// TRANSLATION_IMPORT_PLACEHOLDER_DO_NOT_REMOVE`
        );
      }

      if (!fileContent.includes(namespaceEntry)) {
        fileContent = fileContent.replace(
          '// TRANSLATION_NAMESPACE_PLACEHOLDER_DO_NOT_REMOVE',
          `${namespaceEntry},\n  // TRANSLATION_NAMESPACE_PLACEHOLDER_DO_NOT_REMOVE`
        );
      }

      fs.writeFileSync(i18nFilePath, fileContent, 'utf8');

      return `\n🌐 Arquivo i18n.ts atualizado!`;
    } catch (error) {
      console.error(`❌ Erro ao atualizar i18n.ts: ${error.message}`);
      throw error;
    }
  });

  plop.setActionType('updateIndexFile', (answers, config, plop) => {
    const indexPath = path.resolve(config.filePath);
    const exportStatement = plop.renderString(config.exportStatement, answers);
    const componentName = plop.renderString('{{pascalCase name}}', answers);
    const relativePath = path.relative(process.cwd(), indexPath);

    try {
      let fileContent = fs.readFileSync(indexPath, 'utf8');

      if (!fileContent.includes(exportStatement)) {
        fileContent = fileContent.replace(
          '// EXPORT_PLACEHOLDER_DO_NOT_REMOVE',
          `${exportStatement}\n// EXPORT_PLACEHOLDER_DO_NOT_REMOVE`
        );

        fs.writeFileSync(indexPath, fileContent, 'utf8');
      }
      return `\n🔄 "${componentName}" exportado em ${relativePath}`;
    } catch (error) {
      console.error(`❌ Erro ao atualizar ${relativePath}: ${error.message}`);
      throw error;
    }
  });

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

  plop.setGenerator('📄 Page', {
    description: 'Cria uma página React com styled-components',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Qual o nome da página?',
        validate: (value) =>
          validateNameExists(value, 'pages', plop, { suffix: 'Page' }),
      },
      {
        type: 'confirm',
        name: 'hasProps',
        message: 'Essa página terá props?',
        default: false,
      },
    ],
    actions: (data) => {
      const basePath = 'pages';
      const pageName = plop.renderString('{{pascalCase name}}Page', data);
      const i18nName = plop.renderString(
        '{{camelCase name}}PageTranslations',
        data
      );

      const paths = getPaths(basePath, pageName);
      const templates = getTemplates(basePath, data.hasProps);
      const exportStatement = getExportStatement(pageName);

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
          path: paths.translations,
          templateFile: templates.translations,
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
          type: 'updateI18nConfig',
          importStatement: `import { ${i18nName} } from './${pageName}';`,
          namespaceEntry: `...${i18nName}`,
          filePath: `src/${basePath}/pages.i18n.ts`,
        },
        {
          type: 'prettier',
          path: `src/${basePath}/${pageName}/* src/${basePath}/index.ts src/${basePath}/pages.i18n.ts`,
        },
      ];
    },
  });

  plop.setGenerator('🪝 Hook', {
    description: 'Cria um Hook personalizado',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Qual o nome do Hook? (ex: FetchData, ModalState)',
        validate: (value) =>
          validateNameExists(value, 'hooks', plop, { prefix: 'use' }),
      },
      {
        type: 'confirm',
        name: 'hasProps',
        message: 'Esse hook receberá props?',
        default: false,
      },
    ],
    actions: (data) => {
      const basePath = 'hooks';
      const hookName = plop.renderString('use{{pascalCase name}}', data);

      const paths = getPaths(basePath, hookName);
      const templates = getTemplates(basePath, data.hasProps);
      const exportStatement = getExportStatement(hookName);

      return [
        {
          type: 'add',
          path: paths.base,
          templateFile: templates.base,
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
          path: `src/${basePath}/${hookName}/* src/${basePath}/index.ts`,
        },
      ];
    },
  });
};
