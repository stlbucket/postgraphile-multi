require('./.env')
const express = require("express");
const {postgraphile} = require("postgraphile");

const port = process.env.PORT
const connection = process.env.POSTGRES_CONNECTION
const dynamicJson = process.env.DYNAMIC_JSON === 'true'
const pgDefaultRole = process.env.DEFAULT_ROLE
const disableDefaultMutations = process.env.DISABLE_DEFAULT_MUTATIONS === 'false'
const watchPg = process.env.WATCH_PG === 'true'

const app = express();

app.use(postgraphile(
  connection
  ,'schema_one'
  ,{
    dynamicJson: dynamicJson
    ,pgDefaultRole: pgDefaultRole
    ,showErrorStack: true
    ,extendedErrors: ['severity', 'code', 'detail', 'hint', 'positon', 'internalPosition', 'internalQuery', 'where', 'schema', 'table', 'column', 'dataType', 'constraint', 'file', 'line', 'routine']
    ,disableDefaultMutations: disableDefaultMutations
    ,watchPg: watchPg
    ,graphileBuildOptions: {
      app: app
    }
  }
));

app.use(postgraphile(
  connection
  ,'schema_two'
  ,{
    dynamicJson: dynamicJson
    ,pgDefaultRole: pgDefaultRole
    ,showErrorStack: true
    ,extendedErrors: ['severity', 'code', 'detail', 'hint', 'positon', 'internalPosition', 'internalQuery', 'where', 'schema', 'table', 'column', 'dataType', 'constraint', 'file', 'line', 'routine']
    ,disableDefaultMutations: disableDefaultMutations
    ,watchPg: watchPg
    ,graphileBuildOptions: {
      app: app
    }
    ,graphql: '/dev-graphql'
    ,graphiql: '/dev-graphiql'
  }
));


app.listen(port)

console.log(`listening on ${port}`)