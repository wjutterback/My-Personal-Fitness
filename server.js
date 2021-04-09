const express = require('express');
const routes = require('./routes/index');
const path = require('path');

const morgan = require('morgan');

const app = express();
const PORT = process.env.PORT || 3030;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan('tiny'));
app.use(routes);
app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
