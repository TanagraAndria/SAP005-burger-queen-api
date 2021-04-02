# Burger Queen - Back-end

## Índice

* [1. Prefácio](#1-prefácio)
* [2. Resumo do projeto](#2-resumo-do-projeto)

* [3. API](#3api)
* [4. Ferramentas Utilizadas](#4-ferramentas-utilizadas)

## 1. Prefácio

Um pequeno restaurante de hamburgueres, que está crescendo, necessita de um
sistema para realizar pedidos usando um _tablet_, e que os enviem à
cozinha para que sejam preparados de forma ordenada e eficiente.

A interface front-end da aplicação Burger Queen já foi criado, e agora precisamos
criar o back-end para manejar os dados. Neste caso, isso será feito através
de uma _API rest_ que será compatível com as requisições vindas do front.

## 2. Resumo do projeto

Neste projeto, foi desenvolvido um servidor web que deverá _servir_ `JSON`
através de uma conexão `HTTP`, utilizando 
o Express para rotas, Sequelize para interface com o banco, e o PostgreSQL como banco de dados.
Seguindo o modelo de arquitetura
**MVC** (Model View Controller).

## 3. API

A API contém os seguintes endpoints:

#### `/users`

* `GET /users`
* `GET /users/:uid`
* `POST /users`
* `PUT /users/:uid`
* `DELETE /users/:uid`

#### `/products`

* `GET /products`
* `GET /products/:productid`
* `POST /products`
* `PUT /products/:productid`
* `DELETE /products/:productid`

#### `/orders`

* `GET /orders`
* `GET /orders/:orderId`
* `POST /orders`
* `PUT /orders/:orderId`
* `DELETE /orders/:orderId`

### <b> Acesse aqui: [API](https://ogros-api.herokuapp.com/)

## 4. Ferramentas Utilizadas: 




