const express = require('express')
const app = express();
const db = require('./db');

const bodyParser = require('body-parser');
app.use(bodyParser.json());


const MenuItem = require('./models/menu');

app.get('/', function(req, res) {
    res.send('Welcome to my Hotel....How can I help you')
})

// post method for menu
app.post('/menu', async(req, res) => {
        try {
            const data = req.body //  Assuming the request body contains the person data
                // Create a new Person documnet using the Mongoose model
            const newMenu = new MenuItem(data);
            //save the new person to databases
            const response = await newMenu.save();
            console.log('data saved');
            res.status(200).json(response);
        } catch (err) {
            console.log(err);
            res.status(500).json({ error: 'Internal Server Error' })
        }
    })
    //Get method for Menu
app.get('/menu', async(req, res) => {
    try {
        const data = await MenuItem.find();
        console.log('data fetched');
        res.status(200).json(data);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal Server error' });
    }
})
const personRoutes = require('./routes/personRoutes');
app.use('/person', personRoutes);
app.listen(3000, () => {
    console.log('Listening on port 3000');
})