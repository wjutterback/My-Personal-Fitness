const express = require('express');
const routes = require('./routes/index');
const path = require('path');
 //TODO: Morgan https://www.npmjs.com/package/morgan -- HTTP request logger

const app = express();
const PORT = process.env.PORT || 3030;

app.use(routes);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
