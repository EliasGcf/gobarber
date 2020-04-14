<h1 align="center">
	<img alt="GoStack" src=".github/GoStackLogo.png" width="200px" />
</h1>

<h3 align="center">
  GoBarber ✂️
</h3>

<p align="center">
  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/EliasGcf/gobarber">
  
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/EliasGcf/gobarber">
  
  <img alt="Repository size" src="https://img.shields.io/github/repo-size/EliasGcf/gobarber">
  
  <a href="https://github.com/EliasGcf/gobarber/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/EliasGcf/gobarber">
  </a>
  
  <a href="https://github.com/EliasGcf/gobarber/issues">
    <img alt="Repository issues" src="https://img.shields.io/github/issues/EliasGcf/gobarber">
  </a>
  
  <img alt="GitHub" src="https://img.shields.io/github/license/EliasGcf/gobarber">
</p>

<p align="center">
  <a href="#-projeto">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-instalação-execução-e-desenvolvimento">Instalação, execução e desenvolvimento</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-como-contribuir">Como contribuir</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-licença">Licença</a>
</p>

## 👨🏻‍💻 Projeto

O GoBarber é uma aplicação para o agendamento de serviços para cabeleleiro. Tendo o frontend Web como pagina para o Prestador de Serviço e o mobile para o usuário final.

## 🚀 Tecnologias

Esta aplicação foi desenolvida com as seguintes tecnologias:

- [Node.js](https://nodejs.org/)
- [ReactJS](https://reactjs.org/)
- [React Native](https://reactnative.dev/)
- [Expo](https://expo.io/)

## 💻 Instalação, execução e desenvolvimento

### Pré-requisitos

- [Node.js](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com/)
- [PostgreSQL](https://www.postgresql.org/)
- [MongoDB](https://www.mongodb.com/)

**Faça um clone desse repositório**

### Backend

```bash
# A partir da raiz do projeto, entre na pasta do backend
$ cd backend

# Instale as dependências
$ yarn

# Tenha um banco de dados PostgreSQL em execução, exemplo:
$ docker run --name gobarber-postgres -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres

# Faça uma copia do arquivo .env.example para .env e preencha com SUAS variáveis.
$ cp .env.example .env

# Execute as migrations
$ yarn typeorm migration:run

# Tudo pronto para iniciar o servidor
$ yarn dev
```

### Web

_ps: Antes de executar, lembre-se de iniciar o backend deste projeto_

```bash
# A partir da raiz do projeto, entre na pasta do frontend web
$ cd frontend

# Instale as dependências
$ yarn

# Tudo pronto para iniciar o client
$ yarn start
```

### Mobile

_ps: Antes de executar, lembre-se de iniciar o backend deste projeto_

```bash
# A partir da raiz do projeto, entre na pasta do frontend mobile
$ cd mobile

# Instale as dependências
$ yarn

# A denpender do seu SO, execute:
$ yarn react-native run-ios
# ou
$ yarn react-native run-android
```

## 🤔 Como contribuir

- **Faça um fork deste repositório**

```bash
# Fork via GitHub official command line
# Caso não tenha o GitHub CLI, realize o fork pelo site.

$ gh repo fork EliasGcf/gobarber
```

```bash
# Clone o seu fork
$ git clone url-do-seu-fork && cd gobarber

# Crie uma branch com sua feature
$ git checkout -b minha-feature

# Faça o commit das suas alterações
$ git commit -m 'feat: Minha nova feature'

# Faça o push para a sua branch
$ git push origin minha-feature
```

Depois que o merge da sua pull request for feito, você pode deletar a sua branch.

## 📝 Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

Feito com 💜 by [EliasGcf](https://www.linkedin.com/in/eliasgcf/)
