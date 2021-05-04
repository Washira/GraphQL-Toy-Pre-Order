# Toy Pre-Order

## Backend Stack
This application was developed by
- Node.js
- Express
- GraphQL
- Mongoose
- Body-Parser

See the dependencies detail in `package.json`.


## Installation

```
npm install
```

or 

```
yarn
```

Next, add a file at root directory that's collect these value and type the name like a `nodemon.json`.

```
{
  "env": {
    "MONGO_USER": <your_mongodb_username>,
    "MONGO_PASSWORD": <your_mongodb_password>,
    "MONGO_DB": <your_mongodb_database>
  }
}
```

## Start Server

Type command in project's console.

```
npm run start
```