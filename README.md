<h1 align ='center' > Pokemon Cards Explorer </h1>

## 🔖 Sobre

> Consiste em uma aplicação que usa a api https://pokemontcg.io/, para obter cartas de pokemon, e contém a listagem das cartas, busca de cartas específicas, e visualização do detalhes das mesmas

## Overview do projeto

![Mobile](https://github.com/mwerneck1956/pokedex/blob/master/OverviewPokemonCardsMobile.gif)

![Desktop](https://github.com/mwerneck1956/pokedex/blob/master/OverviewPokemonCardsDesktop.gif)

## Funcionalidades

- [x] Listagem de cartas
- [x] Busca de cartas
- [x] Exibição de detalhes da carta (ataques, pontos fracos, resistências, etc..)

## 💻 Linguagens/Frameworks/Bibliotecas Utilizadas

- 🖥️ NextJS
- ✏️ SASS
- <img src = 'https://badges.aleen42.com/src/javascript.svg'>
- <img alt = 'react' src = "https://badges.aleen42.com/src/react.svg">
- <img alt ='jest' src = 'https://badges.aleen42.com/src/jest_1.svg'>
- 🖥️ Cypress
- ✏️ React testing library

## Url da aplicação

A aplicação está hospedada na vercel e pode ser acessada pelo link https://pokedex-theta-wheat.vercel.app/

## Instalação

Para começar processo de desenvolvimento você deve ter em sua máquina as seguintes ferramentas:

- NodeJS
- GIT
- Yarn

### Baixando a aplicação

```bash
$ git clone https://github.com/mwerneck1956/pokedex
$ cd src
```

### Configurando variáveis de ambiente

Para configurar as variáveis de ambientes necessárias para o funcionamento da aplicação, você deve criar um arquivo chamado `.env.local` (para rodar localmente) com base no modete no arquivo `.env.example`, uma variável de ambiente que é utilizada no projeto, é a chave da api do pokemonTGC, ela pode ser alterada pela seguinte variável de ambiente.

```bash
NEXT_PUBLIC_X_API_KEY =
```

Instruções para obter a chave da api : https://pokemontcg.io/

### Instalando dependências

```bash
$ yarn install
```

### Executando a aplicação

```bash
$ yarn dev
```

### 🧪 Executar os testes unitários (Jest+ React testing library)

```bash
$  yarn test
```

### 🧪 Executar os testes E2E (Cypress)

Startar o servidor em modo de desenvolvimento

```bash
$  yarn dev
```

Para abrir o cypress, digite no terminal:

```bash
$  yarn cypress
```
