const express = require('express');
const graphqlHTTP = require('express-graphql');
const mongoose = require('mongoose');
const cors = require('cors');
const schema = require('./schema/schema');
const config = require('./config');

const app = express();
const port = 4000;

app.use(cors());

mongoose.connect(config.url, {
  useNewUrlParser: true
});

mongoose.connection.once('open', () => {
  console.log('connected to database');
});

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true
  })
);

app.listen(port, () => {
  console.log(`Now listening to port ${port}`);
});
