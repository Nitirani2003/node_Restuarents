const mongoose = require('mongoose');
const mongoURL = 'mongodb://127.0.0.1:27017/restaurants';
mongoose.connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
const db = mongoose.connection;
db.on('connected', () => {
    console.log('connected to MongoDB server');
});

db.on('error', (err) => {
    console.error('MongoDB connection error:', err);
});
db.on('disconnected', () => {
    console.error('MongoDB disconnected:');
});
//Export the database connection
module.exports = db;