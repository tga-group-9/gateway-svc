const express = require('express');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const gatewayRouter = require('./src/routers/gatewayRouter');

const app = express();
app.use(helmet());

//Body Parser middleware
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

const port = 8080;

app.use('/api', gatewayRouter);

app.use('/', (req, res) => {
  res.send('Gateway Server OK!!!');
})

app.use((error, req, res, next) => {
  if (error) res.status(500).send({ statusCode: error.statusCode, msg: error.error.msg });
  next();
});

app.use((req, res) => {
  res.status(404).send('NOT Found.');
});

app.listen(port, () => {
  console.log('Gateway listening at port- ', port);
});
