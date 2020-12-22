
require("dotenv").config();

const express = require('express');
const routes = require("./routes");

const app = express();

// creates a connection instance to the database
require("./database/db")();

app.use(express.json());


const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
    return res.json({ message: 'Welcome dudes!' });
});

app.use('/api', routes);

app.listen(PORT, console.log(`Server running on port ${PORT}`));