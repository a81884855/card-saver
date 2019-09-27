const express = require('express');
const graphqlHTTP = require('express-graphql');
const mongoose = require('mongoose');
const cors = require('cors');
const schema = require('./schema/schema');

const app = express();
const port = 4000;

app.use(cors());

mongoose.connect('mongodb://readonly:0987654321qa@ds033143.mlab.com:33143/card-saver', {
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
