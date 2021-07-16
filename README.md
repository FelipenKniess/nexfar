# Projeto NexFar
### Projeto disponibilizado nesse link: https://nexfar-sable.vercel.app

## Problemas nos quais me deparei na execução do projeto
- As APIs disponibilizadas para consumo dos dados, estão dando erro de Cors ao acessa-las. a melhor forma de corrigir isso é adicionando a biblioteca Cors na própria API. como não tenho acesso a isso, copiei os dados que a API gera e coloquei dentro de um arquivo da aplicação.

## Rotas da aplicação
- /Produtos
- /Carrinho (acesso via carrinho do header)

## Alterações para melhorar essa aplicação
- Aplicar paginação na página do produto;
- Aplicar filtros na página do produto;
- Responsividade para Mobile;
- Uso de APIs para trabalhar com os dados reais;

## Bibliotecas utilizadas (Reactjs) 🚀
- Typescript
- ContextAPI;
- Hooks;
- Styled Components;
- react-router-dom;
- react-toastfy
- axios (caso a api não tivesse dado erro de cors)

## Execução do projeto em desenvolvimento
- Requisítos: Instalar [Git](https://git-scm.com/), [Node](https://nodejs.org/en/), [Yarn](https://yarnpkg.com/)
- Baixar o repositório na máquina e entrar no projeto:
```bash
$ git clone https://github.com/FelipenKniess/nexfar.git
$ cd nexfar
```
- baixar as dependências do projeto e executar o projeto:
```bash
$ yarn
$ yarn start
```
