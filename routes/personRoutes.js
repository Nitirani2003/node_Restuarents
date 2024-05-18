const express = require('express');
const router = express.Router();
const person = require('./../models/person');

router.post('/', async(req, res) => {
    try {
        const data = req.body //  Assuming the request body contains the person data
            // Create a new Person documnet using the Mongoose model
        const newPerson = new person(data);
        //save the new person to databases
        const response = await newPerson.save();
        console.log('data saved');
        res.status(200).json(response);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal Server Error' })
    }
})

router.get('/', async(req, res) => {
    try {
        const data = await person.find();
        console.log('data fetched');
        res.status(200).json(data);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal Server error' });
    }
})
module.exports = router;