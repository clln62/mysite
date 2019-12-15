const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');


app.use(bodyParser.json());

app.use('/', express.static(path.resolve('./client/dist')));


app.listen(3000, () => console.log('Server running on port 3000'));

module.exports = app;