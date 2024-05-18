const express = require('express')
const app = express();
const db = require('./db');
require('dotenv').config();

const bodyParser = require('body-parser');
app.use(bodyParser.json());


const MenuItem = require('./models/menu');

app.get('/', function(req, res) {
    res.send('Welcome to my Hotel....How can I help you')
})

// post method for menu

const personRoutes = require('./routes/personRoutes');

const PORT = process.env.PORT || 3000;
app.use('/person', personRoutes);
app.listen(3000, () => {
    console.log('Listening on port 3000');
})