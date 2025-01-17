<h1>API Node com Express e PostgreSQL</h1>
<p>Esta é uma API desenvolvida em Node.js com Express que utiliza PostgreSQL como banco de dados, configurado em um container Docker. A API implementa um CRUD completo para gerenciar contatos e categorias, que possuem um relacionamento entre si.
A API é parte de uma aplicação que será desenvolvida futuramente. Para testar as rotas, foi utilizado o Insomnia.</p>
<h2>Instalação e Configuração</h2>
<h3>Pré-requisitos</h3>
<p>Certifique-se de ter instalado na sua máquina:</p>

- [Node.js](https://nodejs.org/pt)
- [Docker](https://www.docker.com)
- [Docker Compose](https://docs.docker.com/compose/)

<hr style="border: 0.5px solid #ccc;" />

<h3>Passo a passo</h3>
<h4>1. Clone o repositório</p>
  
```bash
git clone https://github.com/daniel-barbosaa/api-express-crud.git
cd api-node-with-express
````

<h4>2. Instale as dependências</h4>
  
```bash
npm install
ou
yarn
````

<h4>3. Configurando o Banco de Dados</h4>
<p>Este projeto usa um banco de dados PostgreSQL rodando em um container Docker. Siga os passos abaixo para configurá-lo:</p>

1. <strong>Certifique-se de ter o Docker instalado</strong>
<p>Se ainda não tiver o Docker instalado, acesse a <a href="https://www.docker.com"> página oficial do  Docker</a para instalá-lo.> </p>

2. <strong>Crie o container do PostgreSQL</strong>
<p>Execute o seguinte comando no terminal para criar um container PostgreSQL com os valores padrão:</p>

```bash
docker run --name pg -e POSTGRES_USER=root -e POSTGRES_PASSWORD=root -e POSTGRES_DB=api_database -p 5432:5432 -d postgres
````

<strong>O que o comando faz:</strong>

```bash
  -e POSTGRES_USER=root \           # Define o usuário do banco como "root"
  -e POSTGRES_PASSWORD=root \       # Define a senha como "root"
  -e POSTGRES_DB=api_database \     # Cria o banco de dados chamado "api_database"
  -p 5432:5432 \                    # Mapeia a porta local 5432 para a porta 5432 do container
  -d postgres                       # Usa a imagem oficial do PostgreSQL e roda o container em modo "detached"
````
3. <strong>Inicie o container</strong>
<p>Se o container não estiver rodando, você pode iniciá-lo com:</p>

```bash
 docker start api-postgres
````

