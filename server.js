const express = require('express');
const routes = require('./routes/index');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3030;

app.use(routes);
app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
