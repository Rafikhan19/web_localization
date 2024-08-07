const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./db'); // Ensure this file exists and properly connects to your MongoDB instance

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;


app.use(cors());
app.use(express.json());


connectDB();


app.use('/api/users', require('./api/users'));
app.use('/api/textextra', require('./api/textextra'));


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
