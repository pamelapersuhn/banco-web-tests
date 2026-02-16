# Projeto de Testes Automatizados com Cypress

## Objetivo
Este projeto foi desenvolvido com o objetivo de aprender e praticar automação de testes utilizando o Cypress, uma das principais ferramentas para testes end-to-end em aplicações web. O projeto utiliza JavaScript e segue boas práticas de organização de código, incluindo o uso de custom commands e geração de relatórios automatizados.

## Componentes do Projeto
- **Cypress**: Framework principal para automação dos testes.
- **Custom Commands**: Comandos personalizados para reutilização de ações comuns nos testes, localizados em `cypress/support/commands/`.
- **Relatórios**: Geração de relatórios em HTML utilizando o `cypress-mochareporter`, com saída em `cypress/reports/html/`.
- **Fixtures**: Dados de teste armazenados em arquivos JSON na pasta `cypress/fixtures/`.
- **Testes**: Scripts de teste localizados em `cypress/e2e/`.

## Pré-requisitos
- Node.js instalado
- Git instalado
- A API (`banco-api`) e a aplicação web (`banco-web`) devem estar em execução para que os testes funcionem corretamente. Ambos os repositórios estão disponíveis no GitHub do Julio de Lima.

## Instalação
1. Clone este repositório:
   ```sh
   git clone <url-deste-repositorio>
   cd banco-web-tests
   ```
2. Instale as dependências:
   ```sh
   npm install
   ```
3. Certifique-se de que a API e a aplicação web estejam rodando localmente.

## Execução dos Testes
- Para rodar os testes em modo interativo:
  ```sh
  npx cypress open
  ```
- Para rodar os testes em modo headless e gerar relatórios:
  ```sh
  npx cypress run --reporter mochawesome --reporter-options reportDir=cypress/reports/html,overwrite=false,html=true,json=false
  ```
- O relatório HTML será gerado em `cypress/reports/html/index.html`.

## Estrutura dos Testes
- `cypress/e2e/login.cy.js`: Testes relacionados ao login na aplicação.
- `cypress/e2e/transferencias.cy.js`: Testes relacionados a transferências bancárias.

## Custom Commands
Os comandos customizados estão localizados em `cypress/support/commands/`:
- **login.js**: Comando `FazerLoginCredenciaisValidos` para realizar login com credenciais válidas a partir do fixture `credenciais.json`.
- **transferencia.js**: Comandos para facilitar ações de transferência bancária.
- **commom.js**: Comandos utilitários comuns a vários testes.

Exemplo de uso de custom command no teste:
```javascript
cy.FazerLoginCredenciaisValidos()
```

## Fixtures
- `credenciais.json`: Contém usuários e senhas para os testes de login.
- `example.json`: Exemplo de dados para outros testes.

## Observações
- Os repositórios da API e da aplicação web estão disponíveis no GitHub do Julio de Lima:
  - [banco-api](https://github.com/juliodelima/banco-api)
  - [banco-web](https://github.com/juliodelima/banco-web)
- Certifique-se de seguir as instruções desses repositórios para subir ambos os serviços antes de executar os testes.

---

Sinta-se à vontade para contribuir ou adaptar este projeto para seus estudos e práticas de automação de testes!
