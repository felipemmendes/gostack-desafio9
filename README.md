# Node.js 4
Database relationships with Node.js and Typescript.

### [Challenge guideline](https://github.com/Rocketseat/bootcamp-gostack-desafios/tree/master/desafio-database-relations)
### [Template](https://github.com/Rocketseat/gostack-template-typeorm-relations)

## Features

To complete this challenge, I needed to add the following funcionalities to the app, and pass all tests.

* ``POST /customers``: This route shoud receive ``name`` and ``email`` in the request body and create a new unique customer in a ``customers`` SQL table (``id``, ``name``, ``email``, ``created_at``, ``updated_at``).
* ``POST /products``: This route shoud receive ``name``, ``price``, and ``quantity`` in the request body and create a new unique product in a ``products`` SQL table (``id``, ``name``, ``price``, ``quantity``, ``created_at``, ``updated_at``).
* ``POST /orders/``: This route shoud receive ``customer_id`` and and array  of products (``product_id`` and ``quantity``) in the request body and create a new unique order in a ``orders`` SQL table (``id``, ``customer_id``, ``created_at``, ``updated_at``). The order products will be saved in another table ``orders_products`` (``product_id``, ``order_id``, ``total_price``, ``quantity``, ``created_at``, ``updated_at``).
* ``GET /orders/:id``: This route shoud return an order with all related info (``order_id``, ``customer``, ``order_products``).

## This project uses

* [Typescript](https://github.com/microsoft/TypeScript) - TypeScript is a superset of JavaScript that compiles to clean JavaScript output.
* [Node.js](https://github.com/nodejs/node) - Node.js JavaScript runtime.
* [Express](https://github.com/expressjs/express) - Fast, unopinionated, minimalist web framework for node.
* [Typeorm](https://github.com/typeorm/typeorm) - ORM for TypeScript.
* [PostgreSQL](https://www.postgresql.org/) - The World's Most Advanced Open Source Relational Database.
* [TSyringe](https://github.com/microsoft/tsyringe) - Lightweight dependency injection container for JavaScript/TypeScript.
