# Anúbis Backend Com AdonisJS, Node.JS e MySQL

## Pacotes inclusos

1. Bodyparser
2. Authentication
3. CORS
4. Lucid ORM
5. Migrations and seeds
6. Adonis Bumblebee
7. Adonis ACL
8. Adonis Validator
9. MYSQL

## Setup

Para executar esta aplicação em modo desenvolvimento você precisa ter o pacote `@adonijs/cli` instalado em sua máquina.

> Development

```bash
    git clone --dissociate https://github.com/JoaoAlrc/back-end.git
    cd back-end
    npm install
    adonis serve --dev
```

> Production

```bash
    git clone --dissociate https://github.com/JoaoAlrc/back-end.git
    cd back-end
    npm install
    npm start
```

Saída do terminal:

```bash
> adonis-back-end@4.1.0 start /path/to/back-end
> node server.js
> info: serving app on http://127.0.0.1:3333
```

### Migrations

Execute o seguinte comando para executar as migrations:

```js
adonis migration:run
```
